// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIpitrsXdmxtMl6U-PJELDX7SW2_cMnWY",
  authDomain: "handyhelp01-de9d2.firebaseapp.com",
  projectId: "handyhelp01-de9d2",
  storageBucket: "handyhelp01-de9d2.firebasestorage.app",
  messagingSenderId: "441122562923",
  appId: "1:441122562923:web:9631897fd8d25b1571e22e",
  measurementId: "G-9TKGV8WB11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
