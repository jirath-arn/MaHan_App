import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from './Dimension';

const FormInput = ({ lableValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color='#666' />
            </View>
            <TextInput
                value={lableValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor='#666'
                {...rest}
            />
        </View>
    )
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 30,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
})
