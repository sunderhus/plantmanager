import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IEnviroment, IPlant } from '.';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;
export const QuestionContainer = styled.View`
  padding: 0px 30px;
`;
export const HeaderContainer = styled.View`
  padding: 10px 20px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  line-height: 20px;
`;
export const Enviroments = styled.View``;

export const EnviromentsList = styled(
  FlatList as new () => FlatList<IEnviroment>,
)``;

export const PlacesListSeparator = styled.View`
  width: 5px;
`;

export const Plants = styled.View`
  padding: 20px;
  flex: 1;
`;
export const PlantsList = styled(FlatList as new () => FlatList<IPlant>)``;
