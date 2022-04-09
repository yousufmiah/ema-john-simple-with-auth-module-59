// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXJihuzEwaDlV1BFk5u09gnb8BRmpIZhs",
  authDomain: "ema-john-simple-709cb.firebaseapp.com",
  projectId: "ema-john-simple-709cb",
  storageBucket: "ema-john-simple-709cb.appspot.com",
  messagingSenderId: "55142688184",
  appId: "1:55142688184:web:36619311a636bcd6e5db4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
