import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  return(
    <View>
        <View style={styles.header}>
            <Text style={styles.headerText}>Login MaHan</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text>Click Me to Main</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
})