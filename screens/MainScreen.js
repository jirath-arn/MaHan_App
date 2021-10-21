import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'


import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import CreateRoomScreen from './CreateRoomScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: '#fb726a',
        activeBackgroundColor: '#ffffff',
        inactiveBackgroundColor: '#ffffff',
        labelStyle: { fontSize: 14, paddingBottom: 7 },
        style: { height: 67 + insets.bottom, paddingTop: 7 },
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
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'ข้อความ',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comment-dots" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateRoomScreen}
        options={{
          tabBarLabel: 'สร้างห้อง',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'แจ้งเตือน',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'โปรไฟล์',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
};

export default MainScreen;

const styles = StyleSheet.create({

});
