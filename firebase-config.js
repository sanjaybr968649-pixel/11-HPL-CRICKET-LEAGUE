import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsvWDbT7GlvtWtoR8o4N-jLEP4rC8oGcA",
  authDomain: "hand-cricket-primier-league.firebaseapp.com",
  projectId: "hand-cricket-primier-league",
  storageBucket: "hand-cricket-primier-league.firebasestorage.app",
  messagingSenderId: "270593215152",
  appId: "1:270593215152:web:7502fb60432042b6258975",
  measurementId: "G-9S1WS03TBH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
