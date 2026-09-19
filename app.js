import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container">
      <h1>HPL Season 11</h1>
      <p>HAND CRICKET PREMIER LEAGUE</p>
      <h2>Matches</h2>
      <div id="matches">Loading matches...</div>
    </div>
  `;

  try {
    const snapshot = await getDocs(collection(db, "matches"));

    if (snapshot.empty) {
      document.getElementById("matches").innerHTML =
        "<p>No matches found.</p>";
      return;
    }

    const matches = [];

    snapshot.forEach((doc) => {
      matches.push(doc.data());
    });

    matches.sort((a, b) =>
      Number(a.matchNo || 0) - Number(b.matchNo || 0)
    );

    document.getElementById("matches").innerHTML = matches.map(match => `
      <div class="match-card">
        <h3>Match ${match.matchNo}</h3>
        <div class="teams">
          <strong>${match.team1}</strong>
          <span>${match.score1}</span>
        </div>
        <div class="teams">
          <strong>${match.team2}</strong>
          <span>${match.score2}</span>
        </div>
        <p class="result">${match.result}</p>
        <p>📍 ${match.ground}</p>
      </div>
    `).join("");

  } catch (error) {
    console.error("Firebase error:", error);

    document.getElementById("matches").innerHTML = `
      <p>Unable to load matches.</p>
      <small>${error.message}</small>
    `;
  }
});
