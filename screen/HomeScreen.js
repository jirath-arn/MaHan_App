import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({navigation}) => {
  return(
    <View>
        <View style={styles.header}>
            <Text style={styles.headerText}>MaHan</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View>
                <Text>Back to Login</Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    headerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
})