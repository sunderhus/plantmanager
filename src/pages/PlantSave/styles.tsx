import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px 80px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;
export const PlantImage = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.heading};
  font-size: 24px;
  margin-top: 16px;
`;
export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Controlls = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  flex: 1;
  justify-content: space-around;
`;
export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  top: -70px;
`;
export const WaterTip = styled.Image`
  width: 56px;
  height: 56px;
`;
export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: left;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 6px;
`;

export const DateTimeButton = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  padding: 40px 0px;
`;
export const DateTimeText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.text};
  text-align: center;
  font-size: 18px;
`;
