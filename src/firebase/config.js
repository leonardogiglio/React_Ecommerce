
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjShA8mMtS3-y3PhJOE7r3OWqZe9YWdhU",
  authDomain: "ecommerce-a5081.firebaseapp.com",
  projectId: "ecommerce-a5081",
  storageBucket: "ecommerce-a5081.appspot.com",
  messagingSenderId: "22264895505",
  appId: "1:22264895505:web:8c0c626a2ef08ca1a8b9b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);