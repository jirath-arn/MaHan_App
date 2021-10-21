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
    <View style={styles.body}>
        <View style={stylesApp.header}>
            <Text style={stylesApp.headerText}>MaHan</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Room')}>
            <Card title='หาร Netflix' uri={imageInfo_1} ></Card>
        </TouchableOpacity>
        <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>
        <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>

             

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
            <Text style={styles.headerText}>Create Room</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Room')}>
            <Text style={styles.headerText}>Test Room</Text>
        </TouchableOpacity> */}



    </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: "gainsboro"
    },
    
    cardPos: {
        flexDirection: 'row',
    },
    header: {
        backgroundColor: '#f0ffff',
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
        color: '#de4032',
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        margin: 20,
        // borderWidth: 1,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
      }
})