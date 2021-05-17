import React from 'react';
import { View } from 'react-native';
import { Container, Greeting, UserName, UserProfileImage } from './styles';
import TestImage from '../../assets/waterdrop.png';

const Header: React.FC = () => {
  return (
    <Container>
      <View>
        <Greeting> Olá,</Greeting>
        <UserName> Matheus</UserName>
      </View>
      <UserProfileImage source={TestImage} />
    </Container>
  );
};

export default Header;
