import RCTDateTimePickerNative, {
  Event,
} from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';
import { format } from 'date-fns';
import React, { useCallback, useRef, useState } from 'react';
import { Platform } from 'react-native';
import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import { usePlant } from '../../contexts/plants.context';
import { ConfirmationParams } from '../Confirmation';
import {
  AlertLabel,
  Container,
  Controlls,
  DateTimeButton,
  DateTimeText,
  PlantAbout,
  PlantImage,
  PlantInfo,
  PlantName,
  TipContainer,
  TipText,
  WaterTip,
} from './styles';

interface RouteParams {
  plant: {
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
  };
}
const PlantSave: React.FC = () => {
  const isAndroid = useRef(Platform.OS === 'android');
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(() => {
    return Platform.OS === 'android';
  });
  const { savePlant } = usePlant();
  const navigator = useNavigation();
  const route = useRoute();
  const { plant } = route.params as RouteParams;

  const handleChangeTime = useCallback(
    (event: Event, dateTime: Date | undefined): void => {
      if (isAndroid) {
        setShowDatePicker(false);
      }

      if (event.type !== 'set' || !dateTime) {
        return;
      }

      setSelectedDateTime(dateTime);
    },
    [],
  );

  const handleOpenDateTimePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  const handleSavePlant = useCallback(() => {
    savePlant({ ...plant, notificationTime: selectedDateTime });

    navigator.navigate('Confirmation', {
      title: 'Tudo certo',
      subtitle:
        'Fique tranquilo, sempre iremos lembrar você de cuidar da sua plantinha com muito cuidado.',
      icon: 'hug',
      nextScreen: 'MyPlants',
      buttonText: 'Muito obrigado',
    } as ConfirmationParams);
  }, [navigator, plant, savePlant, selectedDateTime]);

  return (
    <Container>
      <PlantInfo>
        <PlantImage uri={plant.photo} height={150} width={150} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controlls>
        <TipContainer>
          <WaterTip source={waterDrop} />
          <TipText>{plant.waterTips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
        {showDatePicker && (
          <RCTDateTimePickerNative
            is24Hour
            accessibilityHint="Selecione o horário do lembrete"
            textColor="red"
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {isAndroid && (
          <DateTimeButton onPress={handleOpenDateTimePicker}>
            <DateTimeText>
              {`Mudar horário ${format(selectedDateTime, 'HH:mm')}`}{' '}
            </DateTimeText>
          </DateTimeButton>
        )}

        <Button title="Cadastrar planta" onPress={handleSavePlant} />
      </Controlls>
    </Container>
  );
};

export default PlantSave;
