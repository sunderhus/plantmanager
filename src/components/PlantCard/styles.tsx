import { RectButton } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Button = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0px;
  align-items: center;
  margin: 10px;
`;

export const ButtonImage = styled(SvgUri)``;

export const ButtonText = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 16px 0px;
`;
