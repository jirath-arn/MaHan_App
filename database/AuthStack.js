import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import CreateRoom from '../screens/CreateRoomScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen} 

            />
            {/* <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ header: () => null }}
            />

            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="Chat"
                component={ChatScreen}
            />

            <Stack.Screen
                name="CreateRoom"
                component={CreateRoom}
            />

            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
            />

            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
            /> */}
        </Stack.Navigator>
    );
}