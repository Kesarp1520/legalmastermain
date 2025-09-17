// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 👈 Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8RfV7TQctck2P2xKBexQP7o0jJjdNYVE",
  authDomain: "legalmaster-f2919.firebaseapp.com",
  projectId: "legalmaster-f2919",
  storageBucket: "legalmaster-f2919.firebasestorage.app",
  messagingSenderId: "80212241880",
  appId: "1:80212241880:web:957660b7ec6de3e04496ad",
  measurementId: "G-T4KXLMCMMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Auth
export const auth = getAuth(app);
