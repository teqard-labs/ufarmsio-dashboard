// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWR9Eaxhe34nBMjz0l1z0ecC0qdM4V-eM",
  authDomain: "uframsio.firebaseapp.com",
  projectId: "uframsio",
  storageBucket: "uframsio.appspot.com",
  messagingSenderId: "162429817446",
  appId: "1:162429817446:web:6ec4bc0b59b69a18fa93a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)