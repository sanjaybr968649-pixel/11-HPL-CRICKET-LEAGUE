import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsvWDbT7GlvtWtoR8o4N-jLEP4rC8oGcA",
  authDomain: "hand-cricket-primer-league.firebaseapp.com",
  projectId: "hand-cricket-primer-league",
  storageBucket: "hand-cricket-primer-league.firebasestorage.app",
  messagingSenderId: "270593215152",
  appId: "1:270593215152:web:7502fb60432042b6258975",
  measurementId: "G-9S1WS03TBH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
