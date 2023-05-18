// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZcmWJfPmvuQIcWCifbT94dCZYVmR9yQo",
  authDomain: "toy-marketplace-8d776.firebaseapp.com",
  projectId: "toy-marketplace-8d776",
  storageBucket: "toy-marketplace-8d776.appspot.com",
  messagingSenderId: "686954468626",
  appId: "1:686954468626:web:1e8e028f67b1e5a8620fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;