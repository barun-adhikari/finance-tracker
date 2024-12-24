// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdTVE621tkO-QjUOh0A9M6MOZhBRCm1Yg",
  authDomain: "finance-tracker-7cd30.firebaseapp.com",
  projectId: "finance-tracker-7cd30",
  storageBucket: "finance-tracker-7cd30.firebasestorage.app",
  messagingSenderId: "735004857166",
  appId: "1:735004857166:web:c250ca3e3e332e21c1441f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };