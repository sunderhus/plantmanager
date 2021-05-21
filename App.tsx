import React from 'react';
import 'react-native-gesture-handler';
import AppProvider from './src/contexts';
import Routes from './src/routes';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
