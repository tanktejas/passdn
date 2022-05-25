// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA52Up15kUgq7w9E116bNZA3leUEsdcl38",
  authDomain: "saloncrm-97a91.firebaseapp.com",
  projectId: "saloncrm-97a91",
  storageBucket: "saloncrm-97a91.appspot.com",
  messagingSenderId: "7453889490",
  appId: "1:7453889490:web:731222d42119500f852e0b",
  measurementId: "G-ESW6MS5MN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
