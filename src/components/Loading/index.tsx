/* eslint-disable global-require */
import React from 'react';
import { Container, Animation } from './styles';
import animationSource from '../../../assets/load.json';

const Loading: React.FC = () => {
  return (
    <Container>
      <Animation source={animationSource} autoPlay loop speed={1.2} />
    </Container>
  );
};

export default Loading;
