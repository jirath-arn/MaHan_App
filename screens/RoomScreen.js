import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import stylesApp from '../assets/css/Styles';

const CreateRoom = ({ navigation }) => {
   

    return (
        <View>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>ชื่อห้อง</Text>
            </View>
            <View>            
            
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.headerText}>ย้อนกลับ</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        margin: 20,
        // borderWidth: 5,
        padding: 10,
        backgroundColor: "#fb726a",
        borderRadius: 10,
        marginTop: 35,
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
    inputText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 20,
        height: 50,
        margin: 20,
        // borderWidth: 1,
        borderRadius: 30,
        padding: 2,
        paddingHorizontal: 20,
        backgroundColor: 'white',
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
        textAlign: 'center',
        fontSize: 25,
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 20,
        // borderWidth: 3,
        // borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
      },
})