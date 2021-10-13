import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({navigation}) => {
  return(
    <View>
        <View style={styles.header}>
            <Text style={styles.headerText}>MaHan Home</Text>
        </View>

    </View>
  )
}

export default HomeScreen;

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