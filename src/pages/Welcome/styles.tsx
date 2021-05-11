import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  justify-content: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 38px;
  line-height: 34px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0px 20px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

export const WateringImage = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const NextPageButton = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${colors.green};
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  min-width: 56px;
`;
