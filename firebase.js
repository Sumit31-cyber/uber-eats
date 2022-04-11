import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoNTug8XsROaWE5rpyxDdZbfYhjP9H5j0",
    authDomain: "rn-uber-eats-clone-7b631.firebaseapp.com",
    projectId: "rn-uber-eats-clone-7b631",
    storageBucket: "rn-uber-eats-clone-7b631.appspot.com",
    messagingSenderId: "988680796769",
    appId: "1:988680796769:web:2e62d758f59ae3acb54820"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);