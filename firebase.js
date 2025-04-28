// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/analytics'; // Optional

const firebaseConfig = {
  apiKey: "AIzaSyAsk_HXN9awASWmRXbPXxLzKFjjtSVnuws",
  authDomain: "authentication-b3162.firebaseapp.com",
  projectId: "authentication-b3162",
  storageBucket: "authentication-b3162.appspot.com", // fixed typo here too
  messagingSenderId: "160732110277",
  appId: "1:160732110277:web:8db44e5e34c9f167dfbfac",
  measurementId: "G-DBDFY6LLYS"
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
