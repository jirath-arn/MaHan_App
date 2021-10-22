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

                    <TouchableOpacity>
                        <View style={styles.cardInvite}>
                            <View style={styles.backgroundProfilePicture}>
                            <Image source={require('../assets/img/Invite3.jpg')} style={styles.invite} />
                            </View>
                            <View style={styles.viewTextCardInvite}>
                                <Text style={styles.textCardInvite}>Invite new member</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


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
    backgroundProfilePicture: {
    },
    textCardInvite: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
    },
    viewTextCardInvite: {
        marginHorizontal: 10,
        
    },
    cardInvite: {
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    invite: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        borderRadius: 50,
        borderColor: 'white',
        marginTop: 5,
        marginHorizontal: 10,
        
        // borderWidth: 5,
    },
    backgroundIcon: {
        backgroundColor: 'white',
        marginHorizontal: 3,
        borderRadius: 10,
        marginLeft: 3,

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
        color: '#f0ffff',
        marginVertical: 10,
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
        backgroundColor: "#fb726a",
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