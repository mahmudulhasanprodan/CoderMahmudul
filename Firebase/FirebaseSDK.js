
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCa0WyZtuzHbNoL_13wRZGLUIKN7jodJwQ",
  authDomain: "codermahmudul-64db8.firebaseapp.com",
  projectId: "codermahmudul-64db8",
  storageBucket: "codermahmudul-64db8.appspot.com",
  messagingSenderId: "946877106059",
  appId: "1:946877106059:web:a593b63c18d540a4e5d18e"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export const db = getFirestore(fireapp);

export default fireapp;
