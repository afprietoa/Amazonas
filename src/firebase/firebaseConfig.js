// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIm0qBbYbFu9ud2t_8gVpCA0spUlIfY3s",
  authDomain: "as-sprint3-7d8d5.firebaseapp.com",
  projectId: "as-sprint3-7d8d5",
  storageBucket: "as-sprint3-7d8d5.appspot.com",
  messagingSenderId: "668807205186",
  appId: "1:668807205186:web:14e41b77a1c997060b38db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();

const db = getFirestore();

export{
    app,
    google,
    facebook,
    db
}