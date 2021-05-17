import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import Button from '../../components/Button';
import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleNextPage = useCallback(() => {
    navigation.navigate('PlantSelection');
  }, [navigation]);

  return (
    <Container>
      <Content>
        <Emoji> 😄 </Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </SubTitle>

        <Footer>
          <Button title="Começar" onPress={handleNextPage} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
