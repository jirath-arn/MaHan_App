// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Profiler } from 'react/cjs/react.production.min';
// import 'react-native-gesture-handler';


// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import MainScreen from './screens/MainScreen';

// import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ChatScreen';
// import CreateRoomScreen from './screens/CreateRoomScreen';
// import NotificationScreen from './screens/NotificationScreen';
// import ProfileScreen from './screens/ProfileScreen';


// const AppStack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack.Navigator>
//         <AppStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ header: () => null }}
//         />

//         <AppStack.Screen
//           name="SignUp"
//           component={SignUpScreen}
//           options={{ header: () => null }}
//         />

//         <AppStack.Screen
//           name="Main"
//           component={MainScreen}
//           options={{ header: () => null }}
//         />

//         <AppStack.Screen
//           name="Home"
//           component={HomeScreen}
//         />

//         <AppStack.Screen
//           name="Chat"
//           component={ChatScreen}
//         />

//         <AppStack.Screen
//           name="CreateRoom"
//           component={CreateRoomScreen}
//         />

//         <AppStack.Screen
//           name="Notification"
//           component={NotificationScreen}
//         />

//         <AppStack.Screen
//           name="Profile"
//           component={ProfileScreen}
//         />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   )
// };

// export default App;


import React from 'react';
import Providers from './database';
export default function App() {
  return <Providers />;
}