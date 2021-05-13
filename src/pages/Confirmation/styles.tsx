import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const Emoji = styled.Text`
  font-size: 78px;
  margin-bottom: 24px;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;
export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding: 10px 0px;
  color: ${colors.heading};
`;
export const Footer = styled.View`
  width: 100%;
  padding: 0px 50px;
  margin-top: 20px;
`;
