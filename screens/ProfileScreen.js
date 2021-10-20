import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import stylesApp from '../assets/css/Styles';
import { AuthContext } from '../database/AuthProvider';


export default function ProfileScreen ({navigation}) {

    const {user, logout} = useContext(AuthContext)

    return (
        <View>
            <View style={stylesApp.header}>
                <Text style={stylesApp.headerText}>โปรไฟล์</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/img/Profile.jpeg')}
                    style={styles.profile}
                />

                <View style={{ paddingLeft: 20 }}>
                    <Text style={styles.username}>Username</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 7,
                            }}
                        >
                            <Text style={{ color: '#ffffff' }}>แก้ไขข้อมูลส่วนตัว</Text>

                            <FontAwesome5
                                name="chevron-right"
                                size={10}
                                style={{
                                    marginTop: 5,
                                    marginLeft: 5,
                                    color: '#ffffff',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Favorite Room */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>ห้องโปรดของคุณ</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Payment */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>การชำระเงิน</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Invite Friends */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>ชวนเพื่อน</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>การตั้งค่า</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Help Center */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>ศูนย์ความช่วยเหลือ</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Application Policy */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.menuView}>
                    <Text style={styles.menuText}>นโยบายของแอพพลิเคชั่น</Text>
                    <FontAwesome5 name="chevron-right" size={15} style={styles.menuIcon} />
                </View>
            </TouchableOpacity>

            {/* Logout */}
            <TouchableOpacity onPress={() => logout()}>
                <View style={styles.logoutView}>
                    <Text style={styles.logoutText}>ออกจากระบบ</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    logoutText: {
        color: '#de4032',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logoutView: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        height: 45,
        justifyContent: 'center',
    },
    menuIcon: {
        paddingRight: 25,
    },
    menuText: {
        paddingLeft: 25,
    },
    menuView: {
        marginTop: 2,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        paddingLeft: 30,
        height: 110,
        backgroundColor: '#fb726a',
        borderRadius: 10,
    },
    username: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    profile: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
        borderRadius: 50,
    },
});
