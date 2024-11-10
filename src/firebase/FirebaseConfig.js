
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBu0NHxg75Z2TI9Sf1a3-1bEAQZuhHsEnI",
  authDomain: "cira-store.firebaseapp.com",
  projectId: "cira-store",
  storageBucket: "cira-store.appspot.com",
  messagingSenderId: "39705340311",
  appId: "1:39705340311:web:817b09def38cc3a018fcd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}