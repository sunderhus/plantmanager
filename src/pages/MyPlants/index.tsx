import * as DateFns from 'date-fns';
import { ptBR } from 'date-fns/locale';

import React, { useEffect, useState } from 'react';
import waterDrop from '../../assets/waterdrop.png';
import Header from '../../components/Header';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import { usePlant } from '../../contexts/plants.context';
import {
  Container,
  Plants,
  PlantsTitle,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Waterings,
  WateringsSeparator,
} from './styles';

export interface IWeteringPLant {
  id: number;
  name: string;
  photo: string;
  frequency: {
    times: number;
    repeatEvery: string;
  };
  notificationTime: Date;
  formatedWateringTime: string;
}

const MyPlants: React.FC = () => {
  const { plants } = usePlant();
  const [nextWatering, setNextWatering] = useState(
    'Cadastre novas plantas para saber o horário de regá-las.',
  );
  const [wateringPlants, setWateringPlants] = useState<IWeteringPLant[]>([]);

  const [loading, setLoading] = useState(true);

  const renderWateringsSeparator = React.memo(() => {
    return <WateringsSeparator />;
  });

  useEffect(() => {
    if (!plants) {
      return;
    }

    const formattedPlants = plants.map(plant => {
      return {
        ...plant,
        formatedWateringTime: DateFns.format(
          new Date(plant?.notificationTime),
          'HH:mm',
        ),
      };
    });
    setWateringPlants(formattedPlants);

    const nextPlantToWatering = formattedPlants.find(plant => {
      return DateFns.isFuture(new Date(plant.notificationTime));
    });

    setLoading(false);

    if (nextPlantToWatering) {
      const nextTime = DateFns.formatDistanceToNow(
        new Date(nextPlantToWatering.notificationTime).getTime(),
        { locale: ptBR },
      );
      setNextWatering(
        `Não esqueça de regar a sua ${nextPlantToWatering.name} em  ${nextTime}.`,
      );
    }
  }, [plants]);

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterDrop} />
        <SpotlightText>{nextWatering}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
      </Plants>

      {!loading && (
        <Waterings
          data={wateringPlants}
          keyExtractor={({ id }) => String(id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <PlantCardSecondary
                plantId={item.id}
                name={item.name}
                photo={item.photo}
                wateringTime={item.formatedWateringTime}
              />
            );
          }}
          ItemSeparatorComponent={renderWateringsSeparator}
        />
      )}
    </Container>
  );
};

export default MyPlants;
