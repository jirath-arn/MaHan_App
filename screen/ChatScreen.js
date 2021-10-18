import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const ChatScreen = ({navigation}) => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>ข้อความ</Text>
            </View>
        </View>
    )
}

export default ChatScreen;

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
})