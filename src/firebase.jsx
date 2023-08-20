import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgYAd5dIaetCrvK3a7eQVfKPsCqCE3Mjo",
  authDomain: "e-commerce-b9838.firebaseapp.com",
  projectId: "e-commerce-b9838",
  storageBucket: "e-commerce-b9838.appspot.com",
  messagingSenderId: "1011102929216",
  appId: "1:1011102929216:web:73f1e62c16dd804a46aaa5",
  measurementId: "G-WRSXJ6LX6X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {  auth };
