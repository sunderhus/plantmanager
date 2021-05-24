import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PushNotification from 'react-native-push-notification';
import { Alert, Platform } from 'react-native';
import { addSeconds } from 'date-fns';

interface IStoredPlant {
  id: number;
  name: string;
  about: string;
  waterTips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeatEvery: 'day' | 'week';
  };
  notificationTime: Date;
}

interface IPlantContext {
  plants: IStoredPlant[];
  savePlant(plant: IStoredPlant): Promise<void>;
  removePlant(id: number): Promise<void>;
}

const PlantContext = createContext<IPlantContext>({} as IPlantContext);

const PlantProvider: React.FC = ({ children }) => {
  const [plants, setPlants] = useState<IStoredPlant[]>([]);

  const getPlantsFromStorage = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem('@plantManager:plants');
      const savedPlants = data ? (JSON.parse(data) as IStoredPlant[]) : [];
      return savedPlants;
    } catch {
      throw Error('Erro ao recuperar plantas salvas.');
    }
  }, []);

  const sortPlantsByNotificationTime = useCallback(
    (unsortedPlants: IStoredPlant[]) => {
      if (!!unsortedPlants && unsortedPlants.length > 1) {
        const result = unsortedPlants.sort((a, b) => {
          const plantA = a.notificationTime;
          const plantB = b.notificationTime;
          return new Date(plantA).getTime() - new Date(plantB).getTime();
        });
        return result;
      }
      return unsortedPlants;
    },
    [],
  );

  const scheduleWateringNotification = useCallback((plant: IStoredPlant) => {
    const nextTime = new Date(plant?.notificationTime);
    const now = new Date();

    const { times, repeatEvery } = plant.frequency;
    if (repeatEvery === 'week') {
      const wateringInterval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + wateringInterval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const trigger = Math.abs(
      Math.ceil(now.getTime() - nextTime.getTime()) / 1000,
    );

    PushNotification.localNotificationSchedule({
      // Android Only
      channelId: 'wateringChannel',
      title: 'Heey, 🌱',
      bigText: `Está na hora de cuidar da sua ${plant.name}`,
      repeatTime: trigger,
      playSound: false,
      // IOS Only
      message: `Está na hora de cuidar da sua ${plant.name}`, // (required),
      // Both
      date: nextTime,
      repeatType: Platform.OS === 'ios' ? 'day' : 'time',
    });
  }, []);

  const savePlant = useCallback(
    async (plant: IStoredPlant): Promise<void> => {
      try {
        const savedPlants = await getPlantsFromStorage();
        scheduleWateringNotification(plant);

        const storedIndex = savedPlants.findIndex(storedPlant => {
          return storedPlant.id === plant.id;
        });

        if (storedIndex >= 0) {
          savedPlants[storedIndex] = plant;
          const sortedPlants = sortPlantsByNotificationTime(savedPlants);

          await AsyncStorage.setItem(
            '@plantManager:plants',
            JSON.stringify(sortedPlants),
          );

          setPlants(sortedPlants);
          return;
        }

        const sortedPlants = sortPlantsByNotificationTime([
          plant,
          ...savedPlants,
        ]);

        await AsyncStorage.setItem(
          '@plantManager:plants',
          JSON.stringify(sortedPlants),
        );
        setPlants(sortedPlants);
      } catch {
        Alert.alert('Erro ao salvar a planta😢.');
      }
    },
    [getPlantsFromStorage, sortPlantsByNotificationTime],
  );

  const removePlant = useCallback(
    async (id: number): Promise<void> => {
      try {
        const savedPlants = await getPlantsFromStorage();
        const filteredPlants = savedPlants.filter(plant => plant.id !== id);

        await AsyncStorage.setItem(
          '@plantManager:plants',
          JSON.stringify(filteredPlants),
        );
        setPlants(filteredPlants);
      } catch {
        Alert.alert('Ocorreu um erro ao tentar remover a planta 😢');
      }
    },
    [getPlantsFromStorage],
  );

  useEffect(() => {
    let cancel = false;
    getPlantsFromStorage().then(savedPlants => {
      if (cancel) return;
      setPlants(savedPlants);
    });
    return () => {
      cancel = true;
    };
  }, [getPlantsFromStorage]);

  return (
    <PlantContext.Provider value={{ plants, savePlant, removePlant }}>
      {children}
    </PlantContext.Provider>
  );
};

const usePlant = (): IPlantContext => {
  const context = useContext(PlantContext);
  return context;
};

export { PlantProvider, usePlant };
