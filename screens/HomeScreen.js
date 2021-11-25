// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase/Firebase';
import Loading from '../components/Loading';
import FormInput from '../components/FormInput';
import Card from './CardFolder/CardHome';
import stylesApp from '../assets/css/Styles';

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.dbRooms = firebase.firestore().collection('rooms');
        this.state = {
            isLoading: true,
            roomArr: []
        };
    }

    componentDidMount() {
        this.unsubscribe = this.dbRooms.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        const roomArr = [];
        querySnapshot.forEach((res) => {
            const { nameRoom, description, password, image_url } = res.data();
            roomArr.push({
                key: res.id,
                res,
                nameRoom,
                description,
                password,
                image_url,
            });
        });
        this.setState({
            roomArr,
            isLoading: false,
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        }

        return (
            <ScrollView>
                <View style={stylesApp.body}>
                    <View style={stylesApp.header}>
                        <Text style={stylesApp.headerText}>MaHan</Text>
                    </View>

                    {/* Search */}
                    <View style={styles.searchTextBox}>
                        <FormInput
                            placeholderText='ค้นหาห้อง'
                            iconType='tags'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>

                    {/* Rooms */}
                    {
                        this.state.roomArr.map((item, i) => {
                            const imageInfo = {
                                uri: item.image_url,
                            }

                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('Room', {
                                            roomkey: item.key
                                        });
                                    }}
                                >
                                    <Card title={item.nameRoom} uri={imageInfo}></Card>
                                </TouchableOpacity>
                            );
                        })
                    }

                    {/* Create Room */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('CreateRoom')}
                    >
                        <Text style={styles.headerText}>สร้างห้อง</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

// const HomeScreen = ({ navigation }) => {
//     const imageInfo_1 = {
//         uri: "https://digitalagemag.com/wp-content/uploads/2021/01/netflix.png"
//     }
//     const imageInfo_2 = {
//         uri: "https://s.isanook.com/hi/0/ud/298/1494545/5.jpg"
//     }

//     return (
//         <ScrollView>
//             <View style={styles.body}>
//                 <View style={stylesApp.header}>
//                     <Text style={stylesApp.headerText}>MaHan</Text>
//                 </View>

//                 <TouchableOpacity onPress={() => navigation.navigate('Room')}>
//                     <Card title='หาร Netflix' uri={imageInfo_1} ></Card>
//                 </TouchableOpacity>
//                 <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>
//                 <Card title='หาร Youtube Premium' uri={imageInfo_2} ></Card>

//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
//                     <Text style={styles.headerText}>Create Room</Text>
//                 </TouchableOpacity>

//                 {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Room')}>
//             <Text style={styles.headerText}>Test Room</Text>
//         </TouchableOpacity> */}

//             </View>
//         </ScrollView>
//     )
// }

// export default HomeScreen;

const styles = StyleSheet.create({
    searchTextBox: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    cardPos: {
        flexDirection: 'row',
    },
    header: {
        backgroundColor: '#f0ffff',
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
        fontSize: 20,
        textAlign: 'center',
        color: '#de4032',
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        margin: 20,
        // borderWidth: 1,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    }
})
