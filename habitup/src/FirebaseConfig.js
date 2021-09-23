import * as firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "habitup-ff2ab.firebaseapp.com",
    projectId: "habitup-ff2ab",
    storageBucket: "habitup-ff2ab.appspot.com",
    messagingSenderId: "671113585638",
    appId: "1:671113585638:web:9d61ce3a816ffaa45bac27",
    measurementId: "G-MCZ2X8MTES"
};

firebase.initializeApp(firebaseConfig);

export default firebase;