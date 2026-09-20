import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  orderBy,
  query
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
    const q = query(
      collection(db, "matches"),
      orderBy("matchNo")
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      app.innerHTML += `<p>No matches found.</p>`;
      return;
    }

    let html = "";

    snapshot.forEach(doc => {
      const m = doc.data();

      html += `
        <div class="match-card">
          <div class="match-number">MATCH ${m.matchNo}</div>

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

          <p class="result">${m.result}</p>
          <p class="ground">${m.ground}</p>
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
    console.error(error);

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
