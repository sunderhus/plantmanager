import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Greeting = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.heading};
  font-size: 32px;
`;
export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
`;

export const UserProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
