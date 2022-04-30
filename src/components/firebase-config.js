import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4I1a3AhLCe26WrSHIW3PB_Kd3VvumyrQ",
  authDomain: "login-test-42b85.firebaseapp.com",
  projectId: "login-test-42b85",
  storageBucket: "login-test-42b85.appspot.com",
  messagingSenderId: "877203668325",
  appId: "1:877203668325:web:7a1d44554c3214c6a3358c",
  measurementId: "G-KCC5WRM5T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)
