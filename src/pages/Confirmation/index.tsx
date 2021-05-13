import React from 'react';
import Button from '../../components/Button';
import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

const Confirmation: React.FC = () => {
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
          <Button title="Começar" />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
