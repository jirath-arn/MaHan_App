// import React, { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import firebase from '../firebase/Firebase';
import Loading from '../components/Loading';
import stylesApp from '../assets/css/Styles';

export default class CreateRoomScreen extends Component {
    constructor() {
        super();
        this.dbRooms = firebase.firestore().collection('rooms');
        this.state = {
            nameRoom: '',
            description: '',
            password: '',
            confirmPassword: '',
            category: '',
            image_url: '',
            isLoading: false
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeRoom() {
        if (this.state.nameRoom == '' || this.state.category == '') {
            alert('Please enter room name or category');
        } else if (this.state.password != this.state.confirmPassword) {
            alert('Passwords do not match');
        } else {
            this.setState({
                isLoading: true,
            });

            if (this.state.description == '') {
                this.inputValueUpdate('-', 'description');
            }

            if(this.state.category == 'Netflix') {
                this.inputValueUpdate('Netflix', 'category');
                this.inputValueUpdate('https://digitalagemag.com/wp-content/uploads/2021/01/netflix.png', 'image_url');
            } else {
                this.inputValueUpdate('Youtube Premium', 'category');
                this.inputValueUpdate('https://s.isanook.com/hi/0/ud/298/1494545/5.jpg', 'image_url');
            }

            this.dbRooms.add({
                nameRoom: this.state.nameRoom,
                description: this.state.description,
                password: this.state.password,
                category: this.state.category,
                image_url: this.state.image_url,
            })
                .then((res) => {
                    this.setState({
                        nameRoom: '',
                        description: '',
                        password: '',
                        confirmPassword: '',
                        category: '',
                        image_url: '',
                        isLoading: false,
                    });

                    this.props.navigation.navigate('Room', {
                        roomkey: res.id
                    });
                })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        }

        return (
            <View style={stylesApp.body}>
                <View style={stylesApp.header}>
                    <Text style={stylesApp.headerText}>???????????????????????????</Text>
                </View>

                <View style={styles.container}>
                    <SafeAreaView>
                        <TextInput
                            value={this.state.nameRoom}
                            style={styles.inputText}
                            placeholder='????????????????????????'
                            onChangeText={(val) => this.inputValueUpdate(val, 'nameRoom')}
                        />
                        <TextInput
                            value={this.state.category}
                            style={styles.inputText}
                            placeholder='????????????????????????'
                            onChangeText={(val) => this.inputValueUpdate(val, 'category')}
                        />
                        <TextInput
                            value={this.state.description}
                            style={styles.inputText}
                            placeholder='????????????????????????'
                            onChangeText={(val) => this.inputValueUpdate(val, 'description')}
                        />
                        <TextInput
                            value={this.state.password}
                            style={styles.inputText}
                            placeholder='????????????????????????'
                            secureTextEntry={true}
                            onChangeText={(val) => this.inputValueUpdate(val, 'password')}
                        />
                        <TextInput
                            value={this.state.confirmPassword}
                            style={styles.inputText}
                            placeholder='??????????????????????????????????????????'
                            secureTextEntry={true}
                            onChangeText={(val) => this.inputValueUpdate(val, 'confirmPassword')}
                        />
                    </SafeAreaView>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.storeRoom()}
                    >
                        <Text style={styles.headerText}>???????????????????????????</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



// const CreateRoom = ({ navigation }) => {

//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const reloadHandler = () => {
//         setName("");
//         setDescription("");
//         setPassword("");
//         setConfirmPassword("");
//     }

//     function submitHandler(name, description, password, confirmPassword) {
//         if (name == '' || description == '' || password == '' || confirmPassword == '') {
//             Alert.alert("???????????????????????????!", "?????????????????????????????????????????????????????????????????????????????????", [
//                 { text: "??????????????????????????????", onPress: () => console.log("alert closed") }
//             ]);
//         } else {
//             reloadHandler();
//             Alert.alert("??????????????????!", "?????????????????????????????????????????????", [
//                 { text: "???????????????????????????", onPress: () => navigation.navigate('Home') }
//             ]);

//         }
//     }

//     return (
//         <View>
//             <View style={stylesApp.header}>
//                 <Text style={stylesApp.headerText}>???????????????????????????</Text>
//             </View>

//             <View style={styles.container}>
//                 <SafeAreaView >
//                     <TextInput
//                         value={name}
//                         style={styles.inputText}
//                         placeholder="????????????????????????"
//                         onFocus={(userName) => setName(userName)}

//                     />
//                     <TextInput
//                         value={description}
//                         style={styles.inputText}
//                         onFocus={(Des) => setDescription(Des)}
//                         placeholder="????????????????????????"
//                     />
//                     <TextInput
//                         value={password}
//                         style={styles.inputText}
//                         onFocus={(password) => setPassword(password)}
//                         placeholder="????????????????????????"
//                         secureTextEntry={true}
//                     />
//                     <TextInput
//                         value={confirmPassword}
//                         style={styles.inputText}
//                         onChangeText={(conpass) => setConfirmPassword(conpass)}
//                         placeholder="??????????????????????????????????????????"
//                         secureTextEntry={true}
//                     />
//                 </SafeAreaView>

//                 <TouchableOpacity style={styles.button}
//                     onPress={() => submitHandler(name, description, password, confirmPassword)}>
//                     <Text style={styles.headerText}>???????????????????????????</Text>
//                 </TouchableOpacity>

//             </View>
//         </View>
//     );
// };

// export default CreateRoom;

const styles = StyleSheet.create({
    body: {
        backgroundColor: "gainsboro",
        flex: 1,
    },
    container: {
        justifyContent: "center",
        margin: 20,
        padding: 10,
        backgroundColor: "#fb726a",
        borderRadius: 10,
        marginTop: 20,
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
        textAlign: 'left',
        fontSize: 20,
        height: 50,
        margin: 20,
        borderRadius: 30,
        padding: 2,
        paddingHorizontal: 20,
        backgroundColor: 'white',
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
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        borderRadius: 10,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
})
