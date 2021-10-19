import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ProfileScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Profile</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.backBody}>
                    <Text style={styles.backFont}>Back to Login</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
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
    headerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    backBody: {
        alignItems: 'center',
        width: 150,
        backgroundColor: 'red',
    },
    backFont: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }
})