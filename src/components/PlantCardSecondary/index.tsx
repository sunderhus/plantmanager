import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, ButtonImage, Details, Time, TimeLabel, Title } from './styles';

interface PlantCardSecondaryProps extends RectButtonProps {
  name: string;
  photo: string;
  wateringTime: string;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
  name,
  photo,
  wateringTime,
  ...rest
}) => {
  return (
    <Button {...rest}>
      <ButtonImage uri={photo} height={50} width={50} />
      <Title>{name}</Title>
      <Details>
        <TimeLabel>Regar as</TimeLabel>
        <Time>{wateringTime}</Time>
      </Details>
    </Button>
  );
};

export default PlantCardSecondary;
