import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBv7Pgzes7WzA7MK2f2VdNTBV1FZgDlpG4",
    authDomain: "ufarmsio.firebaseapp.com",
    projectId: "ufarmsio",
    storageBucket: "ufarmsio.appspot.com",
    messagingSenderId: "573025858102",
    appId: "1:573025858102:web:2e3f8ff6b700242d5f5e97"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);