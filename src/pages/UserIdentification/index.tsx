import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import Button from '../../components/Button';
import {
  AvoidKeyboard,
  Container,
  Content,
  Emoji,
  Form,
  FormFooter,
  FormHeader,
  KeyboardHidder,
  Question,
  UserNameInput,
} from './styles';

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [userName, setUserName] = useState('');

  const handleInputChange = useCallback((text: string) => {
    setUserName(text);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleNextPage = useCallback(() => {
    if (userName) {
      navigation.navigate('Confirmation');
    }
  }, [navigation, userName]);

  return (
    <Container>
      <AvoidKeyboard behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <KeyboardHidder onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <FormHeader>
                <Emoji>{userName ? '😄' : '🙂'}</Emoji>
                <Question>
                  Como podemos {'\n'}
                  chamar você?
                </Question>
              </FormHeader>
              <UserNameInput
                isFocused={isFocused}
                placeholder="Digite um nome"
                value={userName}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <FormFooter>
                <Button title="Confirmar" onPress={handleNextPage} />
              </FormFooter>
            </Form>
          </Content>
        </KeyboardHidder>
      </AvoidKeyboard>
    </Container>
  );
};

export default UserIdentification;
