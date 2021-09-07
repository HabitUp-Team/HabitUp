require('dotenv').config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "habitup-ff2ab.firebaseapp.com",
  projectId: "habitup-ff2ab",
  storageBucket: "habitup-ff2ab.appspot.com",
  messagingSenderId: "671113585638",
  appId: "1:671113585638:web:9d61ce3a816ffaa45bac27",
  measurementId: "G-MCZ2X8MTES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);