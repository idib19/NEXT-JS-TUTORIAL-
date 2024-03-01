// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//fonction db 
import { getFirestore } from "firebase/firestore";

// Configuration Firebase pour notre app 
const firebaseConfig = {
  apiKey: "AIzaSyAf1SVDgDnVU2FujlL_BgKHiaj07NC0LGw",
  authDomain: "tuto-web-58107.firebaseapp.com",
  projectId: "tuto-web-58107",
  storageBucket: "tuto-web-58107.appspot.com",
  messagingSenderId: "1094975186046",
  appId: "1:1094975186046:web:96bca8c6acd0c8115d242f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialise l'instance d'authentification 
export const auth = getAuth(app);
export const db = getFirestore(app);