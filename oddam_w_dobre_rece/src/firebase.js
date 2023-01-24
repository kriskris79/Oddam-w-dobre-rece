
import { getDatabase } from "firebase/database"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmVBxxg86_J_4VrMBat1B9wnRK-cG-hDw",
    authDomain: "oddam-w-dobre-rece-ec6b1.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-ec6b1-default-rtdb.firebaseio.com",
    projectId: "oddam-w-dobre-rece-ec6b1",
    storageBucket: "oddam-w-dobre-rece-ec6b1.appspot.com",
    messagingSenderId: "393456299911",
    appId: "1:393456299911:web:e252d0c2fad5b70360ed22",
    measurementId: "G-4CQHVE8LXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const database = getDatabase(app);