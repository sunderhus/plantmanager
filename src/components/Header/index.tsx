import React from 'react';
import { View } from 'react-native';
import { Container, Greeting, UserName, UserProfileImage } from './styles';
import TestImage from '../../assets/waterdrop.png';
import { useUser } from '../../contexts/user.context';

const Header: React.FC = () => {
  const { name } = useUser();
  return (
    <Container>
      <View>
        <Greeting> Olá,</Greeting>
        <UserName> {name}</UserName>
      </View>
      <UserProfileImage source={TestImage} />
    </Container>
  );
};

export default Header;
