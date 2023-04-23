// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDezjoIM4PJjTSsDg_GV7n8rkgrOL_-EAQ",
    authDomain: "house-marketplace-app-1e703.firebaseapp.com",
    projectId: "house-marketplace-app-1e703",
    storageBucket: "house-marketplace-app-1e703.appspot.com",
    messagingSenderId: "148067343366",
    appId: "1:148067343366:web:6b335ed4d4cb5297dcf787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
