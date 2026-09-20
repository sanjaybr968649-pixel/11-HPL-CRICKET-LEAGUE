import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const app = document.getElementById("app");

async function loadMatches() {

  app.innerHTML = `
    <h1>HPL Season 11</h1>
    <p>HAND CRICKET PREMIER LEAGUE</p>
    <h2>Matches</h2>
    <p>Loading matches...</p>
  `;

  try {

    // Firebase collection name = Matches
    const snapshot = await getDocs(
      collection(db, "Matches")
    );

    if (snapshot.empty) {
      app.innerHTML = `
        <h1>HPL Season 11</h1>
        <p>HAND CRICKET PREMIER LEAGUE</p>
        <h2>Matches</h2>
        <p>No matches found.</p>
      `;
      return;
    }

    const matches = [];

    snapshot.forEach((doc) => {

      const data = doc.data();

      matches.push({
        matchNo: Number(data["Match no"]) || 0,
        team1: data["Team 1"] || "",
        team2: data["Team 2"] || "",
        score1: data["Score 1"] || "",
        score2: data["Score 2"] || "",
        result: data["Result"] || "",
        ground: data["Ground"] || ""
      });

    });

    // Match 1, 2, 3... order
    matches.sort((a, b) => a.matchNo - b.matchNo);

    let html = "";

    matches.forEach((m) => {

      html += `
        <div class="match-card">

          <div class="match-number">
            MATCH ${m.matchNo}
          </div>

          <h3>
            ${m.team1} vs ${m.team2}
          </h3>

          <div class="scores">
            <strong>${m.team1}</strong>
            <span>${m.score1}</span>
          </div>

          <div class="scores">
            <strong>${m.team2}</strong>
            <span>${m.score2}</span>
          </div>

          <p class="result">
            ${m.result}
          </p>

          <p class="ground">
            📍 ${m.ground}
          </p>

        </div>
      `;
    });

    app.innerHTML = `
      <h1>HPL Season 11</h1>

      <p>HAND CRICKET PREMIER LEAGUE</p>

      <h2>Matches</h2>

      ${html}
    `;

  } catch (error) {

    console.error("Firebase error:", error);

    app.innerHTML = `
      <h1>HPL Season 11</h1>

      <p>HAND CRICKET PREMIER LEAGUE</p>

      <h2>Matches</h2>

      <p class="error">
        Unable to load matches.
      </p>

      <p class="error-small">
        ${error.message}
      </p>
    `;
  }
}

loadMatches();
