import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMDYH0ozlhfHAbACCAVWKOyHreUV7SOUw",
  authDomain: "dwec-instrumets.firebaseapp.com",
  projectId: "dwec-instrumets",
  storageBucket: "dwec-instrumets.firebasestorage.app",
  messagingSenderId: "195276760859",
  appId: "1:195276760859:web:ef28af0ae7d203aff455be",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };