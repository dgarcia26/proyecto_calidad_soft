// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPsLwMB_ACwrrL2NuZvwAhfb7uA1GTIhg",
    authDomain: "calidad-soft.firebaseapp.com",
    projectId: "calidad-soft",
    storageBucket: "calidad-soft.appspot.com",
    messagingSenderId: "190200106790",
    appId: "1:190200106790:web:2c58d978d6b008754a7be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }