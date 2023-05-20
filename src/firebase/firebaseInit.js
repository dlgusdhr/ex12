// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEP0SJcrXgcahg7Dqd2pHHRQFZst7OItg",
  authDomain: "react-03-3f2bb.firebaseapp.com",
  databaseURL: "https://react-03-3f2bb-default-rtdb.firebaseio.com",
  projectId: "react-03-3f2bb",
  storageBucket: "react-03-3f2bb.appspot.com",
  messagingSenderId: "230396092417",
  appId: "1:230396092417:web:1329e2de483749ba692000",
  measurementId: "G-NDFXVCS6VX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);