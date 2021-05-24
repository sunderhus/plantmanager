import React, { useCallback } from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import { usePlant } from '../../contexts/plants.context';
import colors from '../../styles/colors';
import {
  Button,
  ButtonImage,
  ButtonRemove,
  Details,
  Time,
  TimeLabel,
  Title,
} from './styles';

interface PlantCardSecondaryProps extends RectButtonProps {
  plantId: number;
  name: string;
  photo: string;
  wateringTime: string;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
  plantId,
  name,
  photo,
  wateringTime,
  ...rest
}) => {
  const { removePlant } = usePlant();

  const handleRemovePlant = useCallback(async () => {
    await removePlant(plantId);
  }, [plantId, removePlant]);

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => {
        return (
          <Animated.View>
            <View>
              <ButtonRemove onPress={handleRemovePlant}>
                <Feather name="trash" size={32} color={colors.white} />
              </ButtonRemove>
            </View>
          </Animated.View>
        );
      }}
    >
      <Button {...rest}>
        <ButtonImage uri={photo} height={50} width={50} />
        <Title>{name}</Title>
        <Details>
          <TimeLabel>Regar as</TimeLabel>
          <Time>{wateringTime}</Time>
        </Details>
      </Button>
    </Swipeable>
  );
};

export default PlantCardSecondary;
