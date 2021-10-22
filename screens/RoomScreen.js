import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import stylesApp from '../assets/css/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'


const CreateRoom = ({ navigation }) => {


    return (
        <View style={styles.body}>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>ชื่อห้อง</Text>
            </View>

            <View style={styles.container}>
                <SafeAreaView >

                    <View style={styles.TopIcon}>
                        
                        <TouchableOpacity>
                            <View style={styles.backgroundIcon}>
                                <FontAwesome5 name="edit" size={25} style={styles.menuIcon} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.backgroundIcon}>
                                <AntDesign name="delete" size={25} style={styles.menuIcon} />
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.picture}>
                        <Image source={require('../assets/img/Netflix.jpg')} style={styles.profile} />
                        <Text style={styles.textBottomPic}>Netflix</Text>
                    </View>


                </SafeAreaView>


            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.headerText}>ย้อนกลับ</Text>
            </TouchableOpacity>

        </View>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    backgroundIcon: {
        backgroundColor: 'white',
        marginHorizontal: 3,
        borderRadius: 10,


    },
    menuIcon: {
        marginVertical: 3,
        alignItems: 'center',
        marginHorizontal: 3,
    },
    TopIcon: {
        flexDirection: 'row',
    },
    textBottomPic: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#f0ffff',
    },
    picture: {
        alignItems: 'center'
    },
    profile: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        borderColor: 'white',
        marginTop: 15,
        // borderWidth: 5,
    },
    body: {
        flex: 1,
        backgroundColor: "gainsboro",
    },
    container: {
        justifyContent: "center",
        margin: 20,
        // borderWidth: 5,
        padding: 10,
        backgroundColor: "darkgrey",
        borderRadius: 30,
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
        color: '#de4032',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 20,
        borderRadius: 30,
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