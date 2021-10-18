import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';
import HomeScreen from './screen/HomeScreen';
import CreateRoom from './screen/CreateRoom';
import ChatScreen from './screen/ChatScreen';
import { Profiler } from 'react/cjs/react.production.min';
import ProfileScreen from './screen/ProfileScreen';

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
          options={{header: () => null}}
        />

        <AppStack.Screen
          name="Home"
          component={HomeScreen}
        />

        <AppStack.Screen
          name="CreateRoom"
          component={CreateRoom}
          
        />

        <AppStack.Screen
          name="ChatScreen"
          component={ChatScreen}
          
        />

        <AppStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          
        />


      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App;

