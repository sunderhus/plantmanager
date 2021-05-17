import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import PlantCard from '../../components/PlantCard';
import api from '../../services/api';
import {
  Container,
  Enviroments,
  EnviromentsList,
  PlacesListSeparator,
  Plants,
  PlantsList,
  QuestionContainer,
  Subtitle,
  Title,
} from './styles';

export interface IPlant {
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
}
export interface IEnviroment {
  key: string;
  title: string;
}

const PlantSelection: React.FC = () => {
  const [enviroments, setEnviroments] = useState<IEnviroment[]>([]);
  const [plants, setPlants] = useState<IPlant[]>([]);

  const renderEnviromentSeparator = React.memo(() => {
    return <PlacesListSeparator />;
  });

  useEffect(() => {
    async function fetchEnviroments() {
      await api
        .get<IEnviroment[]>('plants_environments')
        .then(result => {
          setEnviroments([{ key: 'all', title: 'Todos' }, ...result.data]);
        })
        .catch(() => {
          setEnviroments([]);
        });
    }
    fetchEnviroments();
  }, []);
  useEffect(() => {
    async function fetchPlants() {
      await api
        .get<IPlant[]>('plants')
        .then(result => {
          setPlants(result.data);
        })
        .catch(() => {
          setPlants([]);
        });
    }
    fetchPlants();
  }, []);

  return (
    <Container>
      <Header />
      <QuestionContainer>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </QuestionContainer>

      <Enviroments>
        <EnviromentsList
          data={[...enviroments]}
          horizontal
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderEnviromentSeparator}
          renderItem={({ item }) => {
            return <EnviromentButton key={item.key} title={item.title} />;
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            marginVertical: 32,
            marginBottom: 0,
            padding: 10,
            paddingLeft: 32,
          }}
        />
      </Enviroments>

      <Plants>
        <PlantsList
          data={[...plants]}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PlantCard name={item.name} photo={item.photo} />;
          }}
          contentContainerStyle={{
            justifyContent: 'center',
          }}
        />
      </Plants>
    </Container>
  );
};

export default PlantSelection;
