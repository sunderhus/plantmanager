import React, { useMemo } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, ButtonImage, ButtonText } from './styles';

interface PlantCardProps extends RectButtonProps {
  name: string;
  photo: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, photo, ...rest }) => {
  const MemoButtonImage = useMemo(() => {
    return <ButtonImage uri={photo} height={80} width={80} />;
  }, [photo]);

  return (
    <Button {...rest}>
      {MemoButtonImage}
      <ButtonText>{name}</ButtonText>
    </Button>
  );
};

export default PlantCard;
