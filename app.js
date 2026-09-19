/* =========================================================
   HAND CRICKET PREMIER LEAGUE
   HPL SEASON 11 - NEW APP.JS
   ========================================================= */

"use strict";

/* =========================
   HPL DATA
========================= */

const HPL = {
  season: "Season 11",

  teams: [
    {
      id: "royal-kings",
      name: "Royal Kings",
      short: "RK",
      logo: "royal-kings.png",
      ground: "M. Chinnaswamy Stadium, Bengaluru",
      captain: "Sanjay"
    },
    {
      id: "titans",
      name: "Titans",
      short: "TIT",
      logo: "titans.png",
      ground: "Narendra Modi Stadium, Ahmedabad",
      captain: "Yashas"
    },
    {
      id: "chesara",
      name: "Chesara",
      short: "CHE",
      logo: "chesara.png",
      ground: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
      captain: "Likith"
    },
    {
      id: "stars",
      name: "Stars",
      short: "STR",
      logo: "stars.png",
      ground: "Rajasthan International Stadium, Jaipur",
      captain: "Karan"
    }
  ],

  players: [
    /* Royal Kings */
    {
      id: "sanjay",
      name: "Sanjay B R",
      displayName: "Sanjay",
      team: "Royal Kings",
      place: "Mandya, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast Bowler",
      jersey: "02",
      captain: true,
      photo: "",
      record: {
        matches: 4,
        runs: 402,
        wickets: 1,
        best: 206,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "darshan",
      name: "Darshan",
      team: "Royal Kings",
      place: "Tumkur, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off-Spin",
      jersey: "46",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 42,
        wickets: 17,
        best: 38,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bethell",
      name: "Jacob Bethell",
      displayName: "Bethell",
      team: "Royal Kings",
      place: "",
      role: "All-Rounder",
      batting: "Left-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 181,
        wickets: 0,
        best: 60,
        fifties: 2,
        hundreds: 0
      }
    },

    {
      id: "cox",
      name: "Jordan Cox",
      displayName: "Cox",
      team: "Royal Kings",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 51,
        wickets: 0,
        best: 31,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bumrah",
      name: "Jasprit Bumrah",
      displayName: "Bumrah",
      team: "Royal Kings",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast Bowler",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 45,
        wickets: 0,
        best: 34,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bhuvi",
      name: "Bhuvneshwar Kumar",
      displayName: "Bhuvi",
      team: "Royal Kings",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Medium-Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "rashid",
      name: "Rashid Khan",
      displayName: "Rashid",
      team: "Royal Kings",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "Right-Arm Leg Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "patidar",
      name: "Rajat Patidar",
      displayName: "Patidar",
      team: "Royal Kings",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Titans */
    {
      id: "yashas",
      name: "Yashas",
      team: "Titans",
      place: "Tumkur, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Medium-Fast Bowler",
      jersey: "07",
      captain: true,
      photo: "",
      record: {
        matches: 3,
        runs: 148,
        wickets: 0,
        best: 124,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "shubman-gill",
      name: "Shubman Gill",
      displayName: "S. Gill",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 105,
        wickets: 0,
        best: 65,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "vishnu",
      name: "Vishnu",
      team: "Titans",
      place: "Chitradurga, Karnataka",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast-Medium Bowler",
      jersey: "18",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 62,
        wickets: 0,
        best: 46,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "sai",
      name: "Sai",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 60,
        wickets: 0,
        best: 40,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "manav-suthar",
      name: "Manav Suthar",
      displayName: "Manav Suthar",
      team: "Titans",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Left-Arm Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 46,
        wickets: 9,
        best: 30,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "salt",
      name: "Phil Salt",
      displayName: "Salt",
      team: "Titans",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "prince-yadav",
      name: "Prince Yadav",
      team: "Titans",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "raghuvanshi",
      name: "Angkrish Raghuvanshi",
      displayName: "Raghuvanshi",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Chesara */
    {
      id: "likith",
      name: "Likith",
      team: "Chesara",
      place: "Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast Bowler",
      jersey: "18",
      captain: true,
      photo: "",
      record: {
        matches: 3,
        runs: 30,
        wickets: 0,
        best: 21,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "prajwal-pk",
      name: "Prajwal P.K.",
      displayName: "Prajwal P.K.",
      team: "Chesara",
      place: "Bagalkot, Karnataka",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Medium-Pace Bowler",
      jersey: "06",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 143,
        wickets: 0,
        best: 73,
        fifties: 2,
        hundreds: 0
      }
    },

    {
      id: "root",
      name: "Joe Root",
      displayName: "Root",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 80,
        wickets: 0,
        best: 34,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "smith",
      name: "Steve Smith",
      displayName: "Smith",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "vaibhav",
      name: "Vaibhav",
      team: "Chesara",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 335,
        wickets: 12,
        best: 176,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "rahane",
      name: "Ajinkya Rahane",
      displayName: "Rahane",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 69,
        wickets: 0,
        best: 49,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "ms-d",
      name: "MS Dhoni",
      displayName: "MS D",
      team: "Chesara",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "umesh",
      name: "Umesh Yadav",
      displayName: "Umesh",
      team: "Chesara",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Stars */
    {
      id: "karan",
      name: "Karan",
      team: "Stars",
      place: "Rajasthan",
      role: "All-Rounder",
      batting: "Left-Hand Batsman",
      bowling: "Left-Arm Fast Bowler",
      jersey: "12",
      captain: true,
      photo: "",
      record: {
        matches: 4,
        runs: 160,
        wickets: 10,
        best: 55,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "mohit",
      name: "Mohit",
      team: "Stars",
      place: "Bihar",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off-Spinner",
      jersey: "44",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 142,
        wickets: 0,
        best: 63,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "rabada",
      name: "Kagiso Rabada",
      displayName: "Rabada",
      team: "Stars",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "siraj",
      name: "Mohammed Siraj",
      displayName: "Mohammed Siraj",
      team: "Stars",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 1,
        runs: 97,
        wickets: 0,
        best: 97,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "ben-mayers",
      name: "Ben Mayers",
      team: "Stars",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 98,
        wickets: 0,
        best: 44,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "rickelton",
      name: "Ryan Rickelton",
      displayName: "Rickelton",
      team: "Stars",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Left-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 31,
        wickets: 0,
        best: 27,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "yashraj-punja",
      name: "Yashraj Punja",
      team: "Stars",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "shreyas-iyer",
      name: "Shreyas Iyer",
      displayName: "S. Iyer",
      team: "Stars",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 42,
        wickets: 0,
        best: 37,
        fifties: 0,
        hundreds: 0
      }
    }
  ],

  /* =========================
     MATCHES
  ========================= */

  matches: [
    {
      id: 1,
      home: "Titans",
      away: "Chesara",
      homeScore: "222/3",
      awayScore: "219/5",
      result: "Titans won by 2 wickets",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 2,
      home: "Royal Kings",
      away: "Stars",
      homeScore: "134/2",
      awayScore: "126/5",
      result: "Royal Kings won by 3 wickets",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    },

    {
      id: 3,
      home: "Royal Kings",
      away: "Chesara",
      homeScore: "224/5",
      awayScore: "230/4",
      result: "Chesara won by 1 wicket",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    },

    {
      id: 4,
      home: "Titans",
      away: "Royal Kings",
      homeScore: "251/5",
      awayScore: "135/5",
      result: "Titans won by 116 runs",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 5,
      home: "Titans",
      away: "Stars",
      homeScore: "34/5",
      awayScore: "39/1",
      result: "Stars won by 4 wickets",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 6,
      home: "Stars",
      away: "Chesara",
      homeScore: "170/5",
      awayScore: "238/5",
      result: "Chesara won by 68 runs",
      ground: "Rajasthan International Stadium, Jaipur"
    },

    {
      id: 7,
      home: "Royal Kings",
      away: "Stars",
      homeScore: "240/2",
      awayScore: "235/3",
      result: "Royal Kings won by 3 wickets",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    }
  ],

  points: [
    {
      team: "Titans",
      played: 3,
      won: 2,
      lost: 1,
      points: 4
    },
    {
      team: "Chesara",
      played: 3,
      won: 2,
      lost: 1,
      points: 4
    },
    {
      team: "Royal Kings",
      played: 3,
      won: 2,
      lost: 1,
      points: 4
    },
    {
      team: "Stars",
      played: 3,
      won: 1,
      lost: 2,
      points: 2
    }
  ],

  scorecards: {
    1: {
      home: [
        ["S. Gill", 65, 0],
        ["Vishnu", 16, 0],
        ["Yashas", 11, 0],
        ["Sai", 40, 0],
        ["Manav Suthar", 0, 4]
      ],
      away: [
        ["J. Root", 29, 0],
        ["P.K.", 70, 0],
        ["Likith", 21, 0],
        ["Rahane", 49, 0],
        ["Vaibhav", 20, 3]
      ]
    },

    2: {
      home: [
        ["Sanjay", 40, 0],
        ["Darshan", 38, 5],
        ["Bethell", 56, 0],
        ["Cox", null, 0],
        ["Bumrah", null, 0]
      ],
      away: [
        ["Karan", 31, 1],
        ["Mohit", 42, 0],
        ["Rickelton", 4, 0],
        ["Ben Mayers", 44, 0],
        ["M. Iyer", 5, 0]
      ]
    },

    3: {
      home: [
        ["Sanjay", 94, 1],
        ["Darshan", 4, 3],
        ["Bethell", 60, 0],
        ["Cox", 20, 0],
        ["Bumrah", 34, 0]
      ],
      away: [
        ["J. Root", 34, 0],
        ["P.K.", 0, 0],
        ["Likith", 0, 0],
        ["Rahane", 20, 0],
        ["Vaibhav", 176, 4]
      ]
    },

    4: {
      home: [
        ["S. Gill", 32, 0],
        ["Vishnu", 46, 0],
        ["Yashas", 124, 0],
        ["Sai", 19, 0],
        ["Manav Suthar", 30, 4]
      ],
      away: [
        ["Sanjay", 62, 0],
        ["Darshan", 0, 4],
        ["Bethell", 31, 0],
        ["Cox", 31, 0],
        ["Bumrah", 11, 0]
      ]
    },

    5: {
      home: [
        ["S. Gill", 8, 0],
        ["Vishnu", 0, 0],
        ["Yashas", 13, 0],
        ["Sai", 1, 0],
        ["Manav Suthar", 12, 1]
      ],
      away: [
        ["Karan", 31, 4],
        ["Mohit", 8, 0],
        ["Rickelton", 0, 0],
        ["Ben Mayers", 0, 0],
        ["M. Iyer", 0, 0]
      ]
    },

    6: {
      home: [
        ["Karan", 43, 4],
        ["Mohit", 29, 0],
        ["Rickelton", 27, 0],
        ["Ben Mayers", 34, 0],
        ["M. Iyer", 37, 0]
      ],
      away: [
        ["J. Root", 17, 0],
        ["P.K.", 73, 0],
        ["Likith", 9, 0],
        ["Rahane", 0, 0],
        ["Vaibhav", 139, 5]
      ]
    },

    7: {
      home: [
        ["Sanjay", 206, 0],
        ["Darshan", 0, 5],
        ["Bethell", 34, 0],
        ["Cox", null, 0],
        ["Bumrah", null, 0]
      ],
      away: [
        ["Karan", 55, 1],
        ["Mohit", 63, 0],
        ["Rickelton", 0, 0],
        ["Ben Mayers", 20, 0],
        ["Mohammed Siraj", 97, 0]
      ]
    }
  }
};


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function safe(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function teamData(name) {
  return HPL.teams.find(t => t.name === name);
}

function playerData(id) {
  return HPL.players.find(p => p.id === id);
}

function teamLogo(teamName) {
  const team = teamData(teamName);
  return team ? team.logo : "";
}

function playerName(player) {
  return player.displayName || player.name;
}

function avatar(player) {
  if (player.photo) {
    return `
      <img
        class="player-photo"
        src="${safe(player.photo)}"
        alt="${safe(playerName(player))}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="player-avatar" style="display:none;">
        ${safe(playerName(player).charAt(0))}
      </div>
    `;
  }

  return `
    <div class="player-avatar">
      ${safe(playerName(player).charAt(0))}
    </div>
  `;
}


/* =========================================================
   MAIN CSS
========================================================= */

const style = document.createElement("style");

style.textContent = `
/* =========================================================
   HPL SEASON 11 - UI + RENDER
========================================================= */

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #07100b;
  color: #ffffff;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.hpl-header {
  background: linear-gradient(135deg, #061008, #0b2b18);
  border-bottom: 1px solid #1e6339;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.hpl-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.hpl-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
}

.hpl-subtitle {
  color: #8ee6a9;
  margin-top: 4px;
  font-size: 13px;
}

.hpl-nav {
  background: #09150e;
  border-bottom: 1px solid #173b25;
  overflow-x: auto;
  white-space: nowrap;
}

.nav-inner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 5px;
  padding: 8px 12px;
}

.nav-btn {
  border: 0;
  background: transparent;
  color: #b7cabb;
  padding: 10px 13px;
  border-radius: 8px;
  cursor: pointer;
}

.nav-btn:hover,
.nav-btn.active {
  background: #126b36;
  color: #ffffff;
}

.hpl-container {
  max-width: 1200px;
  margin: auto;
  padding: 18px 14px 50px;
}

.page-title {
  font-size: 28px;
  margin: 8px 0 4px;
}

.page-subtitle {
  color: #91aa99;
  margin: 0 0 18px;
}

.hero {
  background:
    radial-gradient(circle at right top, #168b46 0, transparent 35%),
    linear-gradient(135deg, #0b2415, #07100b);
  border: 1px solid #1c6338;
  border-radius: 18px;
  padding: 25px;
  margin-bottom: 18px;
}

.hero h1 {
  margin: 0 0 8px;
  font-size: clamp(27px, 5vw, 44px);
}

.hero p {
  color: #b8d0bf;
  margin: 0;
}

.grid {
  display: grid;
  gap: 14px;
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  background: #0b1710;
  border: 1px solid #1b3925;
  border-radius: 14px;
  padding: 16px;
}

.card h3,
.card h4 {
  margin-top: 0;
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: #72e397;
}

.muted {
  color: #8fa397;
}

.team-card {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 120px;
}

.team-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.team-name {
  font-size: 20px;
  font-weight: 800;
}

.player-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.player-card {
  background: #0b1710;
  border: 1px solid #1b3925;
  border-radius: 14px;
  padding: 14px;
}

.player-card:hover {
  border-color: #39bd68;
  transform: translateY(-2px);
}

.player-photo,
.player-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player-photo {
  object-fit: cover;
}

.player-avatar {
  background: #176b39;
  color: white;
  font-size: 30px;
  font-weight: 800;
}

.player-card h3 {
  text-align: center;
  margin: 5px 0;
}

.player-card .role {
  text-align: center;
  color: #78dd99;
  font-size: 13px;
}

.player-meta {
  color: #9eb0a4;
  font-size: 13px;
  line-height: 1.7;
  margin-top: 10px;
}

.match-card {
  background: #0b1710;
  border: 1px solid #1b3925;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
}

.match-number {
  color: #71df95;
  font-size: 13px;
  font-weight: 700;
}

.match-teams {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
  margin: 14px 0;
}

.match-team {
  display: flex;
  align-items: center;
  gap: 8px;
}

.match-team.right {
  justify-content: flex-end;
  text-align: right;
}

.match-team img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.score {
  font-size: 20px;
  font-weight: 800;
}

.vs {
  color: #708477;
}

.result {
  color: #76e49a;
  font-weight: 700;
}

.ground {
  color: #8ea296;
  font-size: 13px;
  margin-top: 8px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th,
td {
  padding: 12px 10px;
  border-bottom: 1px solid #20372a;
  text-align: left;
}

th {
  color: #7de39b;
  background: #0e2115;
}

td {
  color: #dbe7de;
}

.team-cell {
  display: flex;
  align-items: center;
  gap: 9px;
}

.team-cell img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.scorecard {
  margin-top: 14px;
  border: 1px solid #1d4028;
  border-radius: 14px;
  overflow: hidden;
}

.scorecard-header {
  background: #0e2b18;
  padding: 14px;
  font-weight: 800;
}

.score-row {
  display: grid;
  grid-template-columns: 1fr 80px 90px;
  padding: 10px 14px;
  border-top: 1px solid #1c3023;
}

.score-row span:nth-child(2),
.score-row span:nth-child(3) {
  text-align: right;
}

.wicket {
  color: #ffbd6b;
}

.filter {
  width: 100%;
  background: #09150e;
  border: 1px solid #244a30;
  color: white;
  border-radius: 9px;
  padding: 11px;
  margin-bottom: 16px;
}

.footer {
  border-top: 1px solid #1c3925;
  color: #708276;
  text-align: center;
  padding: 25px 10px;
  margin-top: 30px;
  font-size: 13px;
}

.back-btn {
  background: #126b36;
  border: 0;
  color: white;
  padding: 9px 13px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
}

@media (max-width: 900px) {
  .player-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .hpl-title {
    font-size: 18px;
  }

  .hpl-container {
    padding: 14px 10px 40px;
  }

  .grid-2,
  .grid-4,
  .player-grid {
    grid-template-columns: 1fr;
  }

  .player-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .player-card {
    padding: 10px;
  }

  .player-photo,
  .player-avatar {
    width: 65px;
    height: 65px;
  }

  .match-teams {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .match-team,
  .match-team.right {
    justify-content: center;
  }

  .score-row {
    grid-template-columns: 1fr 60px 65px;
  }
}
`;

document.head.appendChild(style);


/* =========================================================
   FIX PLAYER NAMES
========================================================= */

HPL.scorecards[2].away[4][0] = "S. Iyer";
HPL.scorecards[5].away[4][0] = "S. Iyer";
HPL.scorecards[6].home[4][0] = "S. Iyer";


/* =========================================================
   APP ELEMENT
========================================================= */

const app = document.getElementById("app");

if (!app) {
  throw new Error("HPL app element not found");
}


/* =========================================================
   NAVIGATION
========================================================= */

let currentPage = "home";

function navBar() {
  const items = [
    ["home", "Home"],
    ["teams", "Teams"],
    ["players", "Players"],
    ["matches", "Matches"],
    ["points", "Points Table"],
    ["stats", "Player Stats"]
  ];

  return `
    <nav class="hpl-nav">
      <div class="nav-inner">
        ${items.map(([id, label]) => `
          <button
            class="nav-btn ${currentPage === id ? "active" : ""}"
            onclick="showPage('${id}')"
          >
            ${label}
          </button>
        `).join("")}
      </div>
    </nav>
  `;
}


/* =========================================================
   HEADER
========================================================= */

function header() {
  return `
    <header class="hpl-header">
      <div class="header-inner">
        <img class="hpl-logo" src="hpl.png" alt="HPL">
        <div>
          <h1 class="hpl-title">HAND CRICKET PREMIER LEAGUE</h1>
          <div class="hpl-subtitle">Season 11 • Official League Website</div>
        </div>
      </div>
    </header>
  `;
}


/* =========================================================
   HOME
========================================================= */

function homePage() {
  const totalMatches = HPL.matches.length;
  const totalPlayers = HPL.players.length;
  const totalTeams = HPL.teams.length;

  return `
    <section class="hero">
      <h1>HPL Season 11</h1>
      <p>
        Hand Cricket Premier League — matches, teams, players,
        statistics, scorecards and points table.
      </p>
    </section>

    <div class="grid grid-4">
      <div class="card">
        <div class="muted">Teams</div>
        <div class="stat-number">${totalTeams}</div>
      </div>

      <div class="card">
        <div class="muted">Players</div>
        <div class="stat-number">${totalPlayers}</div>
      </div>

      <div class="card">
        <div class="muted">Matches</div>
        <div class="stat-number">${totalMatches}</div>
      </div>

      <div class="card">
        <div class="muted">Season</div>
        <div class="stat-number">11</div>
      </div>
    </div>

    <br>

    <div class="grid grid-2">
      <div class="card">
        <h3>Latest Match</h3>
        ${matchSmall(HPL.matches[HPL.matches.length - 1])}
      </div>

      <div class="card">
        <h3>Season Leaders</h3>
        <p><b>Most Runs:</b> Sanjay — 402</p>
        <p><b>Most Wickets:</b> Darshan — 17</p>
        <p><b>Highest Score:</b> Sanjay — 206*</p>
      </div>
    </div>
  `;
}


/* =========================================================
   TEAMS
========================================================= */

function teamsPage() {
  return `
    <h2 class="page-title">Teams</h2>
    <p class="page-subtitle">HPL Season 11 teams and home grounds</p>

    <div class="grid grid-2">
      ${HPL.teams.map(team => `
        <div class="card team-card">
          <img class="team-logo" src="${team.logo}" alt="${safe(team.name)}">
          <div>
            <div class="team-name">${safe(team.name)}</div>
            <div class="muted">Captain: ${safe(team.captain)}</div>
            <div class="ground">${safe(team.ground)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}


/* =========================================================
   PLAYERS
========================================================= */

function playersPage() {
  return `
    <h2 class="page-title">Players</h2>
    <p class="page-subtitle">
      HPL Season 11 player profiles
    </p>

    <input
      id="playerSearch"
      class="filter"
      placeholder="Search player..."
      oninput="filterPlayers(this.value)"
    >

    <div id="playerGrid" class="player-grid">
      ${HPL.players.map(playerCard).join("")}
    </div>
  `;
}

function playerCard(player) {
  return `
    <article class="player-card" data-player="${safe(playerName(player).toLowerCase())}">
      ${avatar(player)}

      <h3>${safe(playerName(player))}${player.captain ? " 🏏" : ""}</h3>

      <div class="role">
        ${safe(player.role || "Player")}
      </div>

      <div class="player-meta">
        ${player.place ? `📍 ${safe(player.place)}<br>` : ""}
        ${player.batting ? `🏏 ${safe(player.batting)}<br>` : ""}
        ${player.bowling ? `⚾ ${safe(player.bowling)}<br>` : ""}
        ${player.jersey ? `#${safe(player.jersey)}<br>` : ""}
        <b>${safe(player.record.runs)} runs</b> •
        <b>${safe(player.record.wickets)} wickets</b>
      </div>
    </article>
  `;
}

function filterPlayers(value) {
  const query = value.toLowerCase().trim();

  document.querySelectorAll("#playerGrid .player-card").forEach(card => {
    card.style.display =
      card.dataset.player.includes(query) ? "" : "none";
  });
}


/* =========================================================
   MATCHES
========================================================= */

function matchesPage() {
  return `
    <h2 class="page-title">Matches</h2>
    <p class="page-subtitle">
      HPL Season 11 match results and scorecards
    </p>

    ${HPL.matches.map(matchCard).join("")}
  `;
}

function matchSmall(match) {
  return `
    <div>
      <div class="match-number">MATCH ${match.id}</div>

      <div class="match-teams">
        <div class="match-team">
          <img src="${teamLogo(match.home)}" alt="">
          <div>
            <b>${safe(match.home)}</b><br>
            <span class="score">${safe(match.homeScore)}</span>
          </div>
        </div>

        <div class="vs">VS</div>

        <div class="match-team right">
          <div>
            <b>${safe(match.away)}</b><br>
            <span class="score">${safe(match.awayScore)}</span>
          </div>
          <img src="${teamLogo(match.away)}" alt="">
        </div>
      </div>

      <div class="result">${safe(match.result)}</div>
      <div class="ground">📍 ${safe(match.ground)}</div>
    </div>
  `;
}

function matchCard(match) {
  return `
    <article class="match-card">
      ${matchSmall(match)}

      <br>

      <button
        class="back-btn"
        onclick="showScorecard(${match.id})"
      >
        View Scorecard
      </button>
    </article>
  `;
}


/* =========================================================
   SCORECARD
========================================================= */

function showScorecard(id) {
  currentPage = "scorecard";

  const match = HPL.matches.find(m => m.id === id);
  const scorecard = HPL.scorecards[id];

  if (!match || !scorecard) return;

  app.innerHTML = `
    ${header()}
    ${navBar()}

    <main class="hpl-container">

      <button class="back-btn" onclick="showPage('matches')">
        ← Back to Matches
      </button>

      <h2 class="page-title">Match ${match.id} Scorecard</h2>

      <div class="card">
        ${matchSmall(match)}
      </div>

      ${scorecardTable(
        match.home,
        match.homeScore,
        scorecard.home
      )}

      ${scorecardTable(
        match.away,
        match.awayScore,
        scorecard.away
      )}

    </main>

    ${footer()}
  `;

  window.scrollTo(0, 0);
}

function scorecardTable(team, score, rows) {
  return `
    <div class="scorecard">
      <div class="scorecard-header">
        ${safe(team)} — ${safe(score)}
      </div>

      ${rows.map(row => {
        const name = row[0];
        const runs = row[1];
        const wickets = row[2];

        return `
          <div class="score-row">
            <span>${safe(name)}</span>

            <span>
              ${runs === null ? "-" : safe(runs)}
              ${runs !== null && runs >= 100 ? "*" : ""}
            </span>

            <span class="wicket">
              ${wickets ? "│".repeat(wickets) : ""}
            </span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}


/* =========================================================
   POINTS TABLE
========================================================= */

function pointsPage() {
  return `
    <h2 class="page-title">Points Table</h2>
    <p class="page-subtitle">
      HPL Season 11 standings
    </p>

    <div class="card table-wrap">
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          ${HPL.points.map(row => `
            <tr>
              <td>
                <div class="team-cell">
                  <img src="${teamLogo(row.team)}" alt="">
                  ${safe(row.team)}
                </div>
              </td>
              <td>${row.played}</td>
              <td>${row.won}</td>
              <td>${row.lost}</td>
              <td><b>${row.points}</b></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <p class="muted">
      Note: Teams with equal points are not additionally ranked here.
    </p>
  `;
}


/* =========================================================
   PLAYER STATS
========================================================= */

function statsPage() {
  const sorted = [...HPL.players]
    .filter(p => p.record && p.record.matches > 0)
    .sort((a, b) => b.record.runs - a.record.runs);

  return `
    <h2 class="page-title">Player Stats</h2>
    <p class="page-subtitle">
      Season 11 recorded statistics
    </p>

    <div class="card table-wrap">
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Matches</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Best</th>
            <th>50s</th>
            <th>100s</th>
          </tr>
        </thead>

        <tbody>
          ${sorted.map(p => `
            <tr>
              <td><b>${safe(playerName(p))}</b></td>
              <td>${p.record.matches}</td>
              <td>${p.record.runs}</td>
              <td>${p.record.wickets}</td>
              <td>${p.record.best}</td>
              <td>${p.record.fifties}</td>
              <td>${p.record.hundreds}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}


/* =========================================================
   FOOTER
========================================================= */

function footer() {
  return `
    <footer class="footer">
      HAND CRICKET PREMIER LEAGUE • HPL Season 11
    </footer>
  `;
}


/* =========================================================
   PAGE ROUTER
========================================================= */

function showPage(page) {
  currentPage = page;

  let content = "";

  if (page === "home") content = homePage();
  if (page === "teams") content = teamsPage();
  if (page === "players") content = playersPage();
  if (page === "matches") content = matchesPage();
  if (page === "points") content = pointsPage();
  if (page === "stats") content = statsPage();

  app.innerHTML = `
    ${header()}
    ${navBar()}

    <main class="hpl-container">
      ${content}
    </main>

    ${footer()}
  `;

  window.scrollTo(0, 0);
}


/* =========================================================
   START APP
========================================================= */

showPage("home");

console.log("HPL Season 11 loaded successfully.");
