import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCf0qibbyj_0WKYCNqzsPX8lYodefzMhSY",
    authDomain: "book-santa-app-f06fb.firebaseapp.com",
    databaseURL: "https://book-santa-app-f06fb.firebaseio.com",
    projectId: "book-santa-app-f06fb",
    storageBucket: "book-santa-app-f06fb.appspot.com",
    messagingSenderId: "542594356038",
    appId: "1:542594356038:web:59359c066f9b011e804b47",
    measurementId: "G-LKMRN4W69J"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
