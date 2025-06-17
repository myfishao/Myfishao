// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAysAn1z2VxMpyL1JFPNyAaPGSjCtlUZ3I",
  authDomain: "myfishao-8a812.firebaseapp.com",
  projectId: "myfishao-8a812",
  storageBucket: "myfishao-8a812.firebasestorage.app",
  messagingSenderId: "211218729471",
  appId: "1:211218729471:web:c1888063112dc6aef7bfca",
  measurementId: "G-QNEVCF8579"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
