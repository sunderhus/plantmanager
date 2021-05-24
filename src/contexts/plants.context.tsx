import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';

interface IStoredPlant {
  id: number;
  name: string;
  about: string;
  waterTips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeatEvery: string;
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

  function sortPlantsByNotificationTime(unsortedPlants: IStoredPlant[]) {
    const result = unsortedPlants.sort((a, b) => {
      const plantA = a.notificationTime;
      const plantB = b.notificationTime;
      return new Date(plantA).getTime() - new Date(plantB).getTime();
    });
    return result;
  }

  const savePlant = useCallback(
    async (plant: IStoredPlant): Promise<void> => {
      try {
        const savedPlants = await getPlantsFromStorage();

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
    [getPlantsFromStorage],
  );

  const removePlant = useCallback(
    async (id: number): Promise<void> => {
      try {
        const savedPlants = await getPlantsFromStorage();
        const filteredPlants = savedPlants.filter(plant => plant.id !== id);

        await AsyncStorage.setItem(
          '@plantManager:plants',
          JSON.stringify([...filteredPlants]),
        );
        setPlants(filteredPlants);
      } catch {
        Alert.alert('Ocorreu um erro ao tentar remover a planta 😢');
      }
    },
    [getPlantsFromStorage],
  );

  useEffect(() => {
    async function getPlants() {
      const savedPlants = await getPlantsFromStorage();

      setPlants(savedPlants);
    }
    getPlants();
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
