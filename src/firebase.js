import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import firebase from 'firebase';
const firebaseConfig ={
    apiKey: "AIzaSyAHrh6uaQJ9Z-45s3qvHrjbXZd4UKlGStQ",
    authDomain: "todoapp-f629d.firebaseapp.com",
    projectId: "todoapp-f629d",
    storageBucket: "todoapp-f629d.appspot.com",
    messagingSenderId: "621024607084",
    appId: "1:621024607084:web:52781ff9c0c380e324d149"
  };
  initializeApp(firebaseConfig)
  export const db = getFirestore();
  // export default db;