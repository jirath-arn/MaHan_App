// import { initializeApp } from 'firebase/app';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYfzSZXVxpqSyNoQoN_EJ30W10Bn6BOow",
  authDomain: "mahan-project-7376d.firebaseapp.com",
  projectId: "mahan-project-7376d",
  storageBucket: "mahan-project-7376d.appspot.com",
  messagingSenderId: "70721173385",
  appId: "1:70721173385:web:b3893ce6fea9bbcd3b5358"
};

// Initialize Firebase
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

firebase.firestore();
export default firebase;
// export { firebase };
