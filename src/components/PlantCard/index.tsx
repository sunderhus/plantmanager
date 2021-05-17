import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, ButtonImage, ButtonText } from './styles';

interface PlantCardProps extends RectButtonProps {
  name: string;
  photo: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, photo, ...rest }) => {
  return (
    <Button>
      <ButtonImage uri={photo} height={100} />
      <ButtonText>{name}</ButtonText>
    </Button>
  );
};

export default PlantCard;
