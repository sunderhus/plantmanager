import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import PlantCard from '../../components/PlantCard';
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
  const [enviroments, setEnviroments] = useState<IEnviroment[]>([
    { key: 'all', title: 'Todos' },
    { key: 'living_room', title: 'Sala' },
    { key: 'bedroom', title: 'Quarto' },
    { key: 'kitchen', title: 'Cozinha' },
    { key: 'bathroom', title: 'Banheiro' },
    { key: 'master_bedromm', title: 'Suíte' },
    { key: 'backyard', title: 'Quintal' },
  ]);
  const [plants, setPlants] = useState<IPlant[]>([
    {
      id: 1,
      name: 'Aningapara',
      about:
        'É uma espécie tropical que tem crescimento rápido e fácil manuseio.',
      waterTips:
        'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg',
      environments: ['living_room', 'kitchen'],
      frequency: {
        times: 2,
        repeatEvery: 'week',
      },
    },
    {
      id: 2,
      name: 'Zamioculca',
      about:
        'Apesar de florescer na primavera, fica o ano todo bonita e verdinha. ',
      waterTips:
        'Utilize vasos com furos e pedras no fundo para facilitar a drenagem. Regue 1 vez no dia.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg',
      environments: ['living_room', 'bedroom'],
      frequency: {
        times: 1,
        repeatEvery: 'day',
      },
    },
    {
      id: 3,
      name: 'Peperomia',
      about:
        'Adapta-se tanto ao sol e sombra, mas prefere ficar num cantinho fresco, sem sol direto. ',
      waterTips:
        'Nos dias mais quentes borrife água nas folhas. Regue 3 vezes na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/3.svg',
      environments: ['bedroom'],
      frequency: {
        times: 3,
        repeatEvery: 'week',
      },
    },
    {
      id: 4,
      name: 'Imbé',
      about:
        'De médio porte que se adapta a diversas regiões, além de ser bem fácil de cultivar. Conquista cada vez mais pessoas.',
      waterTips:
        'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/4.svg',
      environments: ['bedroom', 'living_room'],
      frequency: {
        times: 2,
        repeatEvery: 'week',
      },
    },
    {
      id: 5,
      name: 'Espada São Jorge',
      about:
        'O aroma reduz os níveis de ansiedade e seu cheiro ajudar na qualidade do sono e a produtividade durante o dia.',
      waterTips: 'Regue o solo ao redor. Regue 1 vez no dia.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/5.svg',
      environments: ['bedroom', 'living_room'],
      frequency: {
        times: 1,
        repeatEvery: 'day',
      },
    },
    {
      id: 6,
      name: 'Yucca',
      about:
        'São indicadas pois são fáceis de manter e cuidar. Você colocar em pequenos vasos, ou até mesmo em xícaras.',
      waterTips:
        'Graças à reserva de água dessas verdinhas, é sempre melhor regar pouco. Regue 1 vez na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/6.svg',
      environments: ['kitchen', 'bedroom'],
      frequency: {
        times: 1,
        repeatEvery: 'week',
      },
    },
    {
      id: 7,
      name: 'Frutíferas',
      about:
        'Exigem algumas horinhas de sol por dia, por isso deixe próximo a janelas.',
      waterTips:
        'Regue sempre na terra e não as folhas. Regue 3 vezes na semana',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/7.svg',
      environments: ['kitchen', 'living_room'],
      frequency: {
        times: 3,
        repeatEvery: 'week',
      },
    },
    {
      id: 8,
      name: 'Orquídea',
      about:
        'Traz sensação de tranquilidade e paz ao ambiente. Requer pouca manutenção e ótima para quem tem pouco espaço.',
      waterTips: 'Regue moderadamente. Reque 4 vezes na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/8.svg',
      environments: ['bathroom'],
      frequency: {
        times: 4,
        repeatEvery: 'week',
      },
    },
    {
      id: 9,
      name: 'Violeta',
      about:
        'Com flores delicadas. Elas são ótimas sugestões para decorar o banheiro. ',
      waterTips:
        'Nada de molhar as flores e folhas. Regue o solo 2 vezes na semana.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/3.svg',
      environments: ['bathroom'],
      frequency: {
        times: 2,
        repeatEvery: 'week',
      },
    },
    {
      id: 10,
      name: 'Hortênsia',
      about:
        'A hortênsia é uma planta rústica e se adapta a diferentes tipos de solos.',
      waterTips:
        'Mantenha a terra sempre húmida sem encharcar. Regue 1 vez no dia.',
      photo:
        'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg',
      environments: ['bathroom'],
      frequency: {
        times: 1,
        repeatEvery: 'day',
      },
    },
  ]);

  const renderEnviromentSeparator = React.memo(() => {
    return <PlacesListSeparator />;
  });

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