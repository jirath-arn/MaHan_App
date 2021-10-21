import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import stylesApp from '../assets/css/Styles';


const NotificationScreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>แจ้งเตือน</Text>
            </View>

            <View style={stylesApp.backgroundView}>
                <FontAwesome5 name="bullhorn" size={60} style={stylesApp.backgroundIcon} />
                <Text style={stylesApp.backgroundText}>ยังไม่มีการแจ้งเตือน</Text>
            </View>
        </View>
    )
};

export default NotificationScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: "gainsboro",
    }
});
