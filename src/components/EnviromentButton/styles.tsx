import { TextProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends RectButtonProps {
  active: boolean;
}
interface ButtonTextProps extends TextProps {
  active: boolean;
}

export const Button = styled(RectButton)<ButtonProps>`
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ active }) =>
    active ? colors.green_light : colors.shape};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ active }) => (active ? colors.green_dark : colors.heading)};
  font-family: ${({ active }) => (active ? fonts.heading : fonts.text)};
`;
