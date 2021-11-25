import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import RoomScreen from '../screens/RoomScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Room'
        component={RoomScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
