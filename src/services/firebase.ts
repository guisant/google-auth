import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkbUvYw4n3zyQWI4_hwzKDLxtsubglzRA",
  authDomain: "auth-4c8f4.firebaseapp.com",
  projectId: "auth-4c8f4",
  storageBucket: "auth-4c8f4.appspot.com",
  messagingSenderId: "867976993184",
  appId: "1:867976993184:web:abf65610eb4009f988acc5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);