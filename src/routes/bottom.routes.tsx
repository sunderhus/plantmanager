import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyPlants from '../pages/MyPlants';
import PlantSelection from '../pages/PlantSelection';
import colors from '../styles/colors';

Icon.loadFont();
const Bottom = createBottomTabNavigator();
const { Screen, Navigator } = Bottom;

const BottomRoutes: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 0,
        },
      }}
    >
      <Screen
        name="Nova planta"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="add-circle-outline" size={size} color={color} />
          ),
        }}
        component={PlantSelection}
      />
      <Screen
        name="Minhas plantas"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="format-list-bulleted" size={size} color={color} />
          ),
        }}
        component={MyPlants}
      />
    </Navigator>
  );
};

export default BottomRoutes;
