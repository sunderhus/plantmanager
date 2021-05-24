import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSelection from '../pages/PlantSelection';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';

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
      <Screen name="PlantSelection" component={PlantSelection} />
      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="MyPlants" component={MyPlants} />
    </Navigator>
  );
};

export default StackRoutes;
