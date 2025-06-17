// Import Firebase functions z CDN modulu
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase config z tvojho projektu
const firebaseConfig = {
  apiKey: "AIzaSyAysAn1z2VxMpyL1JFPNyAaPGSjCtlUZ3I",
  authDomain: "myfishao-8a812.firebaseapp.com",
  projectId: "myfishao-8a812",
  storageBucket: "myfishao-8a812.firebasestorage.app",
  messagingSenderId: "211218729471",
  appId: "1:211218729471:web:c1888063112dc6aef7bfca",
  measurementId: "G-QNEVCF8579"
};

// Inicializuj Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Získaj referencie na HTML prvky
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const message = document.getElementById('message');

loginBtn.addEventListener('click', () => {
  const email = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    message.style.color = 'red';
    message.textContent = 'Prosím, vyplňte email aj heslo.';
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.style.color = 'green';
      message.textContent = `Prihlásenie úspešné! Vitajte, ${email}`;
    })
    .catch((error) => {
      message.style.color = 'red';
      message.textContent = `Chyba: ${error.message}`;
    });
});

registerBtn.addEventListener('click', () => {
  const email = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    message.style.color = 'red';
    message.textContent = 'Prosím, vyplňte email aj heslo.';
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.style.color = 'green';
      message.textContent = `Registrácia úspešná! Môžete sa teraz prihlásiť.`;
    })
    .catch((error) => {
      message.style.color = 'red';
      message.textContent = `Chyba: ${error.message}`;
    });
});
