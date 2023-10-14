// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmFgYJWf8G5U6YH3kzmmj1UJlaSdyQ-8",
  authDomain: "netflix-gpt-f8df9.firebaseapp.com",
  projectId: "netflix-gpt-f8df9",
  storageBucket: "netflix-gpt-f8df9.appspot.com",
  messagingSenderId: "49892348191",
  appId: "1:49892348191:web:07ef111d82194dbcb8a02a",
  measurementId: "G-B3F9ZK63WQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

