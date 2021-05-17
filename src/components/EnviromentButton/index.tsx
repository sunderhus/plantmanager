import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Button, ButtonText } from './styles';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Button active={active} {...rest}>
      <ButtonText active={active}>{title}</ButtonText>
    </Button>
  );
};

export default EnviromentButton;
