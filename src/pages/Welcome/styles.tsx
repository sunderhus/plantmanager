import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  justify-content: center;
  color: ${colors.heading};
  margin-top: 38px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0px 20px;
  color: ${colors.heading};
`;

export const WateringImage = styled.Image`
  height: 292px;
  width: 284px;
`;

export const NextPageButton = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${colors.green};
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  min-width: 56px;
  padding: 0px 10px;
`;

export const NextPageButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
