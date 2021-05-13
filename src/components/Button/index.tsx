import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
