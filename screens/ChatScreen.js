import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import stylesApp from '../assets/css/Styles';

const ChatScreen = ({ navigation }) => {
    return (
        <View style={stylesApp.body}>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>ข้อความ</Text>
            </View>

            <View style={stylesApp.backgroundView}>
                <FontAwesome5 name='comment-dots' size={70} style={stylesApp.backgroundIcon} />
                <Text style={stylesApp.backgroundText}>เริ่มแชทได้เลย !!</Text>
            </View>
        </View>
    )
};

export default ChatScreen;
