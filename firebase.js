// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpsrA-WNupdCoWS-hWVTsC391PJBGozRY",
  authDomain: "bookviking-aef20.firebaseapp.com",
  projectId: "bookviking-aef20",
  storageBucket: "bookviking-aef20.appspot.com",
  messagingSenderId: "817178130416",
  appId: "1:817178130416:web:c88fa3c622bc1410e84f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseAuth = getAuth(app);
