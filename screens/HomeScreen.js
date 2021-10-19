import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './CardFolder/CardHome'
import { ScrollView } from 'react-native-gesture-handler';
import stylesApp from '../assets/css/Styles';


const HomeScreen = ({navigation}) => {
    const imageInfo_1 = {
        uri: "https://digitalagemag.com/wp-content/uploads/2021/01/netflix.png"
      }
    const imageInfo_2 = {
        uri: "https://s.isanook.com/hi/0/ud/298/1494545/5.jpg"
      }


  return(
    <ScrollView>
    <View>
        <View style={stylesApp.header}>
            <Text style={stylesApp.headerText}>MaHan</Text>
        </View>

        

        
        
        <Card title='หาร Netflix' uri={imageInfo_1} ></Card>
        <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>
        <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>
        

    </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    cardPos: {
        flexDirection: 'row',
    },
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