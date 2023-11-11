// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf0MNqA8bkpKLpK8zyQmYZyjPkIOJfdKY",
  authDomain: "flixiq-2b1ad.firebaseapp.com",
  projectId: "flixiq-2b1ad",
  storageBucket: "flixiq-2b1ad.appspot.com",
  messagingSenderId: "166720226047",
  appId: "1:166720226047:web:4080338cef2ce9099442ca",
  measurementId: "G-MHQDWLMGRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
