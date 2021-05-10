import React from 'react';
import { Text } from 'react-native';
import wateringImage from '../../assets/watering.png';
import {
  Container,
  NextPageButton,
  NextPageButtonText,
  SubTitle,
  Title,
  WateringImage,
} from './styles';

const Wellcome: React.FC = () => (
  <Container>
    <Title>
      Gerencie {'\n'}suas plantas {'\n'}de forma fácil
    </Title>
    <WateringImage source={wateringImage} />

    <SubTitle>
      Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
      sempre que precisar.
    </SubTitle>
    <NextPageButton activeOpacity={0.7}>
      <NextPageButtonText> Avançar </NextPageButtonText>
    </NextPageButton>
  </Container>
);
export default Wellcome;
