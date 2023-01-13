import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyDM2YP9ceFmxSymNmbjQLghrqtMBDMztMw",
    authDomain: "classtest-be66b.firebaseapp.com",
    projectId: "classtest-be66b",
    storageBucket: "classtest-be66b.appspot.com",
    messagingSenderId: "934586121808",
    appId: "1:934586121808:web:8fca2ad6508fb5497adb55"
  };

export default firebase.database();