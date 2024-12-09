// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLJE0gTef0CYnsULkLLYiuaZU-avfmbE",
  authDomain: "fintrack-ce4a7.firebaseapp.com",
  projectId: "fintrack-ce4a7",
  storageBucket: "fintrack-ce4a7.firebasestorage.app",
  messagingSenderId: "537285437134",
  appId: "1:537285437134:web:0d380be3a75cb22296d29f",
  measurementId: "G-J2D4SCD8CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);