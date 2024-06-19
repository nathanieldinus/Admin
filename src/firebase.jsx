// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeX6oYiRyc7kvi04VcQOFMJvw8TVJLCcQ",
  authDomain: "store-tutorial-ce227.firebaseapp.com",
  projectId: "store-tutorial-ce227",
  storageBucket: "store-tutorial-ce227.appspot.com",
  messagingSenderId: "867138796239",
  appId: "1:867138796239:web:9136b3341c58f5c423d5ba",
  measurementId: "G-QB4J2CK4VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);