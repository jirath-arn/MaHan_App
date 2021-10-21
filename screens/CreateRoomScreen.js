import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import stylesApp from '../assets/css/Styles';

const CreateRoom = ({ navigation }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function submitHandler(name, description, password, confirmPassword){
        if (name == '' || description == '' || password == '' || confirmPassword == ''){
            Alert.alert("แจ้งเตือน!","กรุณาเติมคำในช่องว่างให้ครบ", [
                {text: "เข้าใจแล้ว", onPress: () => console.log("alert closed")}                
            ]);
        } else {
            Alert.alert("สำเร็จ!","สร้างห้องสำเร็จ", [
                {text: "เสร็จสิ้น", onPress: () => navigation.navigate('Home')}
            ]);
        }
    }

    return (
        <View>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>สร้างห้อง</Text>
            </View>
            
            <View  style={styles.container}>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setName}
                        placeholder="ชื่อห้อง"
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setDescription}
                        placeholder="คำอธิบาย"
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setPassword}
                        placeholder="รหัสผ่าน"
                        //keyboardType="numeric" สำหรับใส่ตัวเลขเท่านั้น
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setConfirmPassword}
                        placeholder="ยืนยันรหัสผ่าน"
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
    container: {
        justifyContent: "center",
        margin: 20,
        borderWidth: 5,
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
        textAlign: 'center',
        fontSize: 20,
        height: 40,
        margin: 20,
        borderWidth: 3,
        borderRadius: 10,
        padding: 2,
        backgroundColor: 'white',
    },
    headerText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 20,
        borderWidth: 3,
        borderRadius: 10,
      },
})