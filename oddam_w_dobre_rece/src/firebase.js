
import { getDatabase } from "firebase/database"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmVBxxg86_J_4VdfgdfgcG-hDw",
    authDomain: "oddam-w-dobredfgdfg1.firebaseapp.com",
    databaseURL: "https://oddam-w-dobdfgdf6b1-default-rtdb.firebaseio.com",
    projectId: "oddam-w-dobre-rece-ec6b1",
    storageBucket: "oddam-w-dobre-rece-ec6b1.appspot.com",
    messagingSenderId: "39dfgfg9911",
    appId: dfgdfg99911:web:e252d0c2fad5b70360ed22",
    measurementId: "G-xfdfLXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const database = getDatabase(app);