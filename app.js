import { db } from "./firebase-config.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container">
      <h1>HPL Season 11</h1>
      <h2>Firebase Test</h2>
      <p id="status">Checking Match 1...</p>
      <div id="data"></div>
    </div>
  `;

  try {
    const ref = doc(db, "matches", "match1");
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      document.getElementById("status").textContent =
        "Match 1 NOT FOUND";
      return;
    }

    const match = snap.data();

    document.getElementById("status").textContent =
      "Match 1 FOUND ✅";

    document.getElementById("data").innerHTML = `
      <div class="match-card">
        <h3>Match ${match.matchNo}</h3>
        <p>${match.team1} ${match.score1}</p>
        <p>${match.team2} ${match.score2}</p>
        <p>${match.result}</p>
        <p>📍 ${match.ground}</p>
      </div>
    `;

  } catch (error) {
    document.getElementById("status").textContent =
      "Firebase Error: " + error.message;
  }
});
