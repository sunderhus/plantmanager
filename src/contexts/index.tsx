import React from 'react';
import { PlantProvider } from './plants.context';
import { UserProvider } from './user.context';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <PlantProvider>{children}</PlantProvider>
    </UserProvider>
  );
};

export default AppProvider;
