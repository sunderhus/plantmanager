import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import PlantCard from '../../components/PlantCard';
import api from '../../services/api';
import colors from '../../styles/colors';
import {
  Container,
  Enviroments,
  EnviromentsList,
  HeaderContainer,
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
  const [isLoading, setIsLoading] = useState(true);
  const [blockLoadMore, setBlockLoadMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [enviroments, setEnviroments] = useState<IEnviroment[]>([]);
  const [selectedEnviroment, setSelectedEnviroment] = useState<string>('all');
  const [plants, setPlants] = useState<IPlant[]>([]);

  const navigator = useNavigation();

  const fetchEnviroments = useCallback(async () => {
    await api
      .get<IEnviroment[]>(`plants_environments?_sort=title&_order=asc`)
      .then(result => {
        setEnviroments([{ key: 'all', title: 'Todos' }, ...result.data]);
      })
      .catch(() => {
        setEnviroments([]);
      });
  }, []);

  const fetchPlants = useCallback(async () => {
    const { data } = await api.get<IPlant[]>(`plants`, {
      params: {
        _sort: 'name',
        _order: 'asc',
        _page: page,
        _limit: 8,
        environments_like:
          selectedEnviroment !== 'all' ? selectedEnviroment : null,
      },
    });
    if (!data || data.length === 0) {
      setBlockLoadMore(true);
      return;
    }

    if (page > 1) {
      setPlants(oldState => [...oldState, ...data]);
    } else {
      setPlants(data);
    }
    setBlockLoadMore(false);
    setIsLoading(false);
    setIsLoadingMore(false);
  }, [page, selectedEnviroment]);

  const renderEnviromentSeparator = React.memo(() => {
    return <PlacesListSeparator />;
  });

  const handleSelectEnviroment = useCallback((enviroment: string) => {
    setPage(1);
    setIsLoadingMore(false);
    setIsLoading(true);
    setSelectedEnviroment(enviroment);
  }, []);

  const handleLoadMorePlants = useCallback(
    (distanceFromEnd: number) => {
      if (distanceFromEnd < 0) {
        return;
      }

      if (blockLoadMore) {
        return;
      }

      setIsLoadingMore(true);

      setPage(page + 1);
    },
    [blockLoadMore, page],
  );

  const handlePlantSelection = useCallback(
    (plant: IPlant) => {
      navigator.navigate('PlantSave', { plant });
    },
    [navigator],
  );

  useEffect(() => {
    fetchEnviroments();
  }, [fetchEnviroments]);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  if (isLoading && !isLoadingMore) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <QuestionContainer>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </QuestionContainer>

      <Enviroments>
        <EnviromentsList
          data={[...enviroments]}
          horizontal
          keyExtractor={item => String(item.key)}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderEnviromentSeparator}
          renderItem={({ item }) => {
            return (
              <EnviromentButton
                key={item.key}
                title={item.title}
                onPress={() => handleSelectEnviroment(item.key)}
                active={item.key === selectedEnviroment}
              />
            );
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
          keyExtractor={(item, index) => `${item.id}${index}`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            handleLoadMorePlants(distanceFromEnd);
          }}
          renderItem={({ item }) => {
            return (
              <PlantCard
                name={item.name}
                photo={item.photo}
                onPress={() => handlePlantSelection(item)}
              />
            );
          }}
          alwaysBounceVertical
          contentContainerStyle={{
            justifyContent: 'center',
          }}
          ListFooterComponent={
            isLoadingMore && !blockLoadMore ? (
              <ActivityIndicator color={colors.green} />
            ) : (
              <></>
            )
          }
        />
      </Plants>
    </Container>
  );
};

export default PlantSelection;
