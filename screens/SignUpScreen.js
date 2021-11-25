import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../authentication/AuthProvider';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormRedButton from '../components/FormRedButton';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { register } = useContext(AuthContext);

    const goSignUp = () => {
        if (email == '' || password == '' || confirmPassword == '') {
            alert('Please Enter Email or Password or Confirm Password');
        } else if(password != confirmPassword) {
            alert('Passwords do not match');
        } else {
            register(email, password);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            {/* Email */}
            <FormInput
                lableValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText='Email'
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

            {/* Confirm Password */}
            <FormInput
                lableValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText='Confirm Password'
                iconType='lock'
                secureTextEntry={true}
            />

            {/* SignUp */}
            <FormButton
                buttonTitle='Sign Up'
                onPress={() => goSignUp()}
            />

            {/* <FormRedButton
                buttonTitle='Back'
                onPress={() => navigation.navigate('Login')}
            /> */}

            {/* Back */}
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
    forgotButton: {
        marginVertical: 30,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#de4032',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
})
