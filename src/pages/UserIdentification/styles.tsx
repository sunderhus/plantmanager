import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface UserNameInputProps {
  isFocused: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const AvoidKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const KeyboardHidder = styled.TouchableWithoutFeedback``;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;
export const FormHeader = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Question = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const UserNameInput = styled(TextInput)<UserNameInputProps>`
  border-bottom-width: 1px;
  border-color: ${({ isFocused, value }) =>
    isFocused || !!value ? colors.green : colors.gray};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  color: ${colors.body_dark};
`;

export const FormFooter = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0px 20px;
`;
