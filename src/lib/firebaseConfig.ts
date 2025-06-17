// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLSolH2-wL7ulsABBJ7580TLOFy6KZTAo",
  authDomain: "vivah-connect-640ba.firebaseapp.com",
  projectId: "vivah-connect-640ba",
  storageBucket: "vivah-connect-640ba.firebasestorage.app",
  messagingSenderId: "198300448504",
  appId: "1:198300448504:web:d955a22ee434845a926d0d",
  measurementId: "G-JK8TXWZ19P"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider); 

// const analytics = getAnalytics(app);