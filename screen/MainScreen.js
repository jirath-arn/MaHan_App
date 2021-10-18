import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import HomeScreen from './HomeScreen';
import CreateRoom from './CreateRoom';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        labelStyle: { fontSize: 14 },
        style: { height: 60 + insets.bottom },
      }}
    

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: 'ข้อความ',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{
          tabBarLabel: 'Create Room',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          ),
        }}
      />



      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'โปรไฟล์',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}        
      />
    </Tab.Navigator>



  )
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
