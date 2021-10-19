import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const CreateRoom = ({ navigation }) => {

    const [name, onChangeText] = useState();
    const [password, onChangePassword] = useState();
    const [confirmPassword, onChangeConfirmPassword] = useState();
    const [description, onChangeDescription] = useState();
    //const [number, onChangeNumber] = useState(null);

    return (
        <View>
            <View style={styles.header}>
                    <Text style={styles.headerText}>Create Room</Text>
            </View>
            <View  style={styles.container}>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={onChangeText}
                        value={name}
                        placeholder="Room Name"
                    />
                </SafeAreaView>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={onChangeDescription}
                        value={description} 
                        placeholder="Description"
                    />
                </SafeAreaView>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={onChangePassword}
                        value={password} 
                        placeholder="Password"
                        //keyboardType="numeric" สำหรับใส่ตัวเลขเท่านั้น
                    />
                </SafeAreaView>
                <SafeAreaView >
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={onChangeConfirmPassword}
                        value={confirmPassword} 
                        placeholder="Confirm Password"
                    />
                </SafeAreaView>                
                <TouchableOpacity style={styles.button} onPress={() => alert("error")}>
                    <Text style={styles.headerText}>Create</Text>
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
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
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
        padding: 20,
        margin: 20,
        borderWidth: 1,
      },
})