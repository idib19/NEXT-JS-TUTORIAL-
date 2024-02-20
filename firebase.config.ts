// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDa_NmKIr5j8cgucFLppBk5cQW3z3c3Cw0",
    authDomain: "client-ikasugu.firebaseapp.com",
    projectId: "client-ikasugu",
    storageBucket: "client-ikasugu.appspot.com",
    messagingSenderId: "8562542041",
    appId: "1:8562542041:web:af33f3d335b082375a85c8",
    measurementId: "G-DN5WST5B02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

