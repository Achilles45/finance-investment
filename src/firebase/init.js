import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCumSWPusXagmyX8jF-ciL_dI0P4roDryg",
  authDomain: "financial-investment.firebaseapp.com",
  databaseURL: "https://financial-investment.firebaseio.com",
  projectId: "financial-investment",
  storageBucket: "financial-investment.appspot.com",
  messagingSenderId: "512957768997",
  appId: "1:512957768997:web:fa71ecad50ff38996326cc",
  measurementId: "G-0TWBV9GNNM"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();