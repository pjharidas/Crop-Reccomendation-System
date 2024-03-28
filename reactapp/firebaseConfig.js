import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAIzlEJjCGjHyu_JZMm2TTQcuI3vk2wH88",
  authDomain: "cropdata-f7934.firebaseapp.com",
  databaseURL: "https://cropdata-f7934-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cropdata-f7934",
  storageBucket: "cropdata-f7934.appspot.com",
  messagingSenderId: "949185266078",
  appId: "1:949185266078:web:d890a7a18e9ea18b30d68f",
  measurementId: "G-FBTZX3CW6C"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhHiDBHUBw6beqqs_3E5I2U_0y2bAFCdk",
//   authDomain: "database1-9a152.firebaseapp.com",
//   projectId: "database1-9a152",
//   storageBucket: "database1-9a152.appspot.com",
//   messagingSenderId: "628588049453",
//   appId: "1:628588049453:web:1983423abc26c688d0f4a4",
//   measurementId: "G-QR37Y0ERKF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);