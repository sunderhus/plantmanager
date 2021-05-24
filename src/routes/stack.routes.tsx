import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';
import UserIdentification from '../pages/UserIdentification';
import Welcome from '../pages/Welcome';
import colors from '../styles/colors';
import BottomRoutes from './bottom.routes';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIdentification" component={UserIdentification} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelection" component={BottomRoutes} />
      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="MyPlants" component={BottomRoutes} />
    </Navigator>
  );
};

export default StackRoutes;
