import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoHiv8kJr6LPJln7vOWwt60w4Vv9BrKVw",
  authDomain: "whatsup-8977e.firebaseapp.com",
  projectId: "whatsup-8977e",
  storageBucket: "whatsup-8977e.appspot.com",
  messagingSenderId: "722754368563",
  appId: "1:722754368563:web:9e0a5c21c6b246913cdf46",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, app };
