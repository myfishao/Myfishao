// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAysAn1z2VxMpyL1JFPNyAaPGSjCtlUZ3I",
  authDomain: "myfishao-8a812.firebaseapp.com",
  projectId: "myfishao-8a812",
  storageBucket: "myfishao-8a812.firebasestorage.app",
  messagingSenderId: "211218729471",
  appId: "1:211218729471:web:c1888063112dc6aef7bfca",
  measurementId: "G-QNEVCF8579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
