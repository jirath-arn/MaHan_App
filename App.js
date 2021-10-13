import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';
import HomeScreen from './screen/HomeScreen';

const AppStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />

        <AppStack.Screen
          name="Main"
          component={MainScreen}
        />

        <AppStack.Screen
          name="Home"
          component={HomeScreen}
        />


      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App;

