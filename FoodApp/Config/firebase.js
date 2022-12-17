// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDEUf-mA2dq4eegUepvcwHof_fO1gbubvo",
  authDomain: "mobilefood-6668b.firebaseapp.com",
  projectId: "mobilefood-6668b",
  storageBucket: "mobilefood-6668b.appspot.com",
  messagingSenderId: "808694138436",
  appId: "1:808694138436:web:35f5e69b298f6f01701e11"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
