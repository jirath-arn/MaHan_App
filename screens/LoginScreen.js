import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../authentication/AuthProvider';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const AppStack = createStackNavigator();

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const goLogin = () => {
        if (username == '' || password == '') {
            alert('Please Enter Username or Password');
        } else {
            login(username, password);
        }
    }

    return (
        <View style={styles.body}>
            <Image
                source={require('../assets/img/MaHan_icon.png')}
                style={styles.logo}
            />
            <Text style={styles.maHanText}>MaHan</Text>

            {/* Username */}
            <FormInput
                lableValue={username}
                onChangeText={(userName) => setUsername(userName)}
                placeholderText='Username'
                iconType='user'
                autoCapitalize='none'
                autoCorrect={false}
            />

            {/* Password */}
            <FormInput
                lableValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text>Click Me to Main</Text>
            </TouchableOpacity>

            {/* SignIn */}
            <FormButton
                buttonTitle='Sign In'
                onPress={() => goLogin()}
            />

            {/* SignUp */}
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
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
    maHanText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
    },
    maHan: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 120,
        width: 120,
        resizeMode: 'cover',
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#de4032',
    },
})
