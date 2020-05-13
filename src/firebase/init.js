import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxUP0AewdNrzXqyxtIhQ4rqP2kpYl85z8",
  authDomain: "diamondinvestment-b3497.firebaseapp.com",
  databaseURL: "https://diamondinvestment-b3497.firebaseio.com",
  projectId: "diamondinvestment-b3497",
  storageBucket: "diamondinvestment-b3497.appspot.com",
  messagingSenderId: "719784801736",
  appId: "1:719784801736:web:2dc9202345a736acd13cfd",
  measurementId: "G-SNG5K8PXNW"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();