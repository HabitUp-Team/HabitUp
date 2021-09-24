import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "habitup-f5bb5.firebaseapp.com",
  projectId: "habitup-f5bb5",
  storageBucket: "habitup-f5bb5.appspot.com",
  messagingSenderId: "218033068607",
  appId: "1:218033068607:web:c0f180a7860ad9c28eb68a",
  measurementId: "G-9TZ2295EJB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;