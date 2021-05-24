import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import wateringImage from '../../assets/watering.png';
import colors from '../../styles/colors';
import {
  Container,
  NextPageButton,
  SubTitle,
  Title,
  WateringImage,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleNextPage = useCallback(() => {
    navigation.navigate('UserIdentification');
  }, [navigation]);

  return (
    <Container>
      <Title>
        Gerencie {'\n'}suas plantas de {'\n'} forma fácil
      </Title>
      <WateringImage resizeMode="contain" source={wateringImage} />

      <SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </SubTitle>
      <NextPageButton activeOpacity={0.7} onPress={handleNextPage}>
        <Icon name="chevron-right" color={colors.white} size={24} />
      </NextPageButton>
    </Container>
  );
};
export default Welcome;
