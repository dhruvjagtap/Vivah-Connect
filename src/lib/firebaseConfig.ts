// lib/firebaseConfig.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLSolH2-wL7ulsABBJ7580TLOFy6KZTAo",
  authDomain: "vivah-connect-640ba.firebaseapp.com",
  projectId: "vivah-connect-640ba",
  storageBucket: "vivah-connect-640ba.appspot.com", // ✅ FIXED here
  messagingSenderId: "198300448504",
  appId: "1:198300448504:web:d955a22ee434845a926d0d",
  measurementId: "G-JK8TXWZ19P",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Only initialize auth on the client
const auth = typeof window !== "undefined" ? getAuth(app) : null;

export { auth };
