// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Configuration Firebase pour notre app 
const firebaseConfig = {
  apiKey: "AIzaSyD1vPxn00G6r05bv5-K2_hCkmje8OPXi20",
  authDomain: "tutoriel-next-js.firebaseapp.com",
  projectId: "tutoriel-next-js",
  storageBucket: "tutoriel-next-js.appspot.com",
  messagingSenderId: "1054249729022",
  appId: "1:1054249729022:web:2deec4ceb6a59e6fee5eaf",
  measurementId: "G-9NL8TDJLV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialise l'instance d'authentification 
export const auth = getAuth(app);
