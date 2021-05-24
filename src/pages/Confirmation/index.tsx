import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import Button from '../../components/Button';
import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

export interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: 'smile' | 'hug';
  nextScreen: 'PlantSelection' | 'MyPlants';
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const { buttonText, icon, nextScreen, subtitle, title } =
    router.params as ConfirmationParams;

  const handleNextPage = useCallback(() => {
    navigation.navigate(nextScreen);
  }, [navigation, nextScreen]);

  return (
    <Container>
      <Content>
        <Emoji> {emojis[icon]} </Emoji>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>

        <Footer>
          <Button title={buttonText} onPress={handleNextPage} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
