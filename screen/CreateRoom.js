import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { and, or } from 'react-native-reanimated';

const CreateRoom = ({ navigation }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function submitHandler(name, description, password, confirmPassword){
        if (name == '' || description == '' || password == '' || confirmPassword == ''){
            Alert.alert("OOPS!","Please fill in entry space", [
                {text: "Understood", onPress: () => console.log("alert closed")}
            ]);
        } else {
            Alert.alert("OOPS!","ส่งข้อมูลไปหน้า Main เพื่อสร้างห้อง", [
                {text: "Understood", onPress: () => console.log("alert closed")}
            ]);
        }
    }

    return (
        <View>
            <View style={styles.header}>
                    <Text style={styles.headerText}>Create Room</Text>
            </View>
            
            <View  style={styles.container}>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setName}
                        placeholder="Room Name"
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setDescription}
                        placeholder="Description"
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setPassword}
                        placeholder="Password"
                        //keyboardType="numeric" สำหรับใส่ตัวเลขเท่านั้น
                    />
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                    />
                </SafeAreaView>

                <TouchableOpacity style={styles.button} 
                    onPress={() => submitHandler(name, description, password, confirmPassword)}>
                    <Text style={styles.headerText}>Create</Text>
                </TouchableOpacity>
                <Text>name:{name}</Text>
                <Text>description:{description}</Text>
                <Text>password:{password}</Text>
                <Text>confirmPassword:{confirmPassword}</Text>
            </View>
        </View>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        margin: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
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
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
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
        padding: 15,
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
      },
})