import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={MainScreen} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}