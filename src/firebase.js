

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👉 import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAzUdEAtR6f93oVdXTUPY5lvvaQpLeLkao",
    authDomain: "cloudcore-4f07b.firebaseapp.com",
    projectId: "cloudcore-4f07b",
    storageBucket: "cloudcore-4f07b.firebasestorage.app",
    messagingSenderId: "304605915712",
    appId: "1:304605915712:web:7df226386745950d7d4da5",
    measurementId: "G-QP9P8VL9D8"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 👉 initialize Firestore
const analytics = getAnalytics(app);

export { app, db, analytics };
