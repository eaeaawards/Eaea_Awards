import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBooB-CPnxXQ1HJ73u_1OLDqFQ62VsYY6Y",
  authDomain: "eaea-awards.firebaseapp.com",
  projectId: "eaea-awards",
  storageBucket: "eaea-awards.firebasestorage.app",
  messagingSenderId: "524095805462",
  appId: "1:524095805462:web:1ce0e99380284ac233fd37",
  measurementId: "G-NRDTF8PY77"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase Initialized");