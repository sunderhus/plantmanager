import { RectButton } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Button = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
  background-color: ${colors.shape};
`;

export const ButtonImage = styled(SvgUri)``;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
  padding-right: 10px;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;
export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
