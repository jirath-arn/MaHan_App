import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import stylesApp from '../assets/css/Styles';

const CreateRoom = ({ navigation }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const reloadHandler = () =>{
        setName("");
        setDescription("");
        setPassword("");
        setConfirmPassword("");
    }

    function submitHandler(name, description, password, confirmPassword){
        if (name == '' || description == '' || password == '' || confirmPassword == ''){
            Alert.alert("แจ้งเตือน!","กรุณาเติมคำในช่องว่างให้ครบ", [
                {text: "เข้าใจแล้ว", onPress: () => console.log("alert closed")}                
            ]);
        } else {
            reloadHandler();
            Alert.alert("สำเร็จ!","สร้างห้องสำเร็จ", [
                {text: "เสร็จสิ้น", onPress: () => navigation.navigate('Home')}
            ]);
            
        }
    }

    return (
        <View style={styles.body}>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>สร้างห้อง</Text>
            </View>
            
            <View  style={styles.container}>
                <SafeAreaView >
                    <TextInput
                        value={name}
                        style={styles.inputText}
                        placeholder="ชื่อห้อง"
                        onFocus={(userName) => setName(userName)}
                        
                    />
                    <TextInput 
                        value={description}
                        style={styles.inputText}
                        onFocus={(Des) => setDescription(Des)}
                        placeholder="คำอธิบาย"
                    />
                    <TextInput 
                        value={password}
                        style={styles.inputText}
                        onFocus={(password) => setPassword(password)}
                        placeholder="รหัสผ่าน"
                        secureTextEntry={true}
                    />
                    <TextInput 
                        value={confirmPassword}
                        style={styles.inputText}
                        onChangeText={(conpass) => setConfirmPassword(conpass)}
                        placeholder="ยืนยันรหัสผ่าน"
                        secureTextEntry={true}
                    />
                </SafeAreaView>

                <TouchableOpacity style={styles.button}
                    onPress={() => submitHandler(name, description, password, confirmPassword)}>
                    <Text style={styles.headerText}>สร้างห้อง</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    body: {
        backgroundColor: "gainsboro",
        flex: 1,
    },
    container: {
        justifyContent: "center",
        margin: 20,
        padding: 10,
        backgroundColor: "#fb726a",
        borderRadius:10,
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