import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IWeteringPLant } from '.';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;
  background-color: ${colors.background};
`;

export const Spotlight = styled.View`
  background-color: ${colors.blue_light};
  padding: 0px 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;
export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 10px 0px 20px;
  text-align: left;
`;
export const Plants = styled.View`
  width: 100%;
`;
export const PlantsTitle = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.heading};
  font-size: 24px;
  margin: 20px 0px;
`;

export const Waterings = styled(FlatList as new () => FlatList<IWeteringPLant>)`
  width: 100%;
`;
export const WateringsSeparator = styled.View`
  height: 5px;
`;
