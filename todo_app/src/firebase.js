import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAMopUK8YAhCzPA5hyrrCGXkuCp0fbFSnA",
    authDomain: "todo-app-cp-2014b.firebaseapp.com",
    databaseURL: "https://todo-app-cp-2014b-default-rtdb.firebaseio.com",
    projectId: "todo-app-cp-2014b",
    storageBucket: "todo-app-cp-2014b.appspot.com",
    messagingSenderId: "1005443377954",
    appId: "1:1005443377954:web:8fe29ec07d17a2b351d37b",
    measurementId: "G-29WXESF4MN"
  
  

});

const db = firebaseApp.firestore();
export default db;
