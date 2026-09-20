const TEAMS=[
{name:"Royal Kings",logo:"royal-kings.png",captain:"Sanjay",ground:"M. Chinnaswamy Stadium, Bengaluru"},
{name:"Titans",logo:"titans.png",captain:"Yashas",ground:"Narendra Modi Stadium, Ahmedabad"},
{name:"Chesara",logo:"chesara.png",captain:"Likith",ground:"Rajiv Gandhi International Cricket Stadium, Hyderabad"},
{name:"Stars",logo:"stars.png",captain:"Karan",ground:"Rajasthan International Stadium, Jaipur"}];

const MATCHES=[
["1","Titans","Chesara","222/3","219/5","Titans won by 2 wickets","Narendra Modi Stadium, Ahmedabad"],
["2","Royal Kings","Stars","134/2","126/5","Royal Kings won by 3 wickets","M. Chinnaswamy Stadium, Bengaluru"],
["3","Royal Kings","Chesara","224/5","230/4","Chesara won by 1 wicket","M. Chinnaswamy Stadium, Bengaluru"],
["4","Titans","Royal Kings","251/5","135/5","Titans won by 116 runs","Narendra Modi Stadium, Ahmedabad"],
["5","Titans","Stars","34/5","39/1","Stars won by 4 wickets","Narendra Modi Stadium, Ahmedabad"],
["6","Stars","Chesara","170/5","238/5","Chesara won by 68 runs","Rajasthan International Stadium, Jaipur"],
["7","Royal Kings","Stars","240/2","235/3","Royal Kings won by 3 wickets","M. Chinnaswamy Stadium, Bengaluru"]];

const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const logo=n=>{let t=TEAMS.find(x=>x.name===n);return t?`<img class="logo" src="${t.logo}" alt="${esc(n)}">`:""};

function card(m){return `<article class="card"><small>MATCH ${esc(m.matchNo)}</small><div class="team">${logo(m.team1)}<b>${esc(m.team1)}</b><strong>${esc(m.score1)}</strong></div><div class="team">${logo(m.team2)}<b>${esc(m.team2)}</b><strong>${esc(m.score2)}</strong></div><p class="result">${esc(m.result)}</p><small>📍 ${esc(m.ground)}</small></article>`}

const fallback=MATCHES.map(x=>({matchNo:x[0],team1:x[1],team2:x[2],score1:x[3],score2:x[4],result:x[5],ground:x[6]}));

function page(){
 const p=location.hash.slice(1)||"home";
 if(p==="home") document.querySelector("#app").innerHTML=`<section class="hero"><img src="hpl.png" class="hpl"><p>HAND CRICKET PREMIER LEAGUE</p><h1>HPL Season 11</h1></section><section><h2>Latest Matches</h2><div id="matches" class="grid"><p>Loading...</p></div></section>`;
 else if(p==="matches") document.querySelector("#app").innerHTML=`<section><h2>Matches</h2><div id="matches" class="grid"><p>Loading...</p></div></section>`;
 else if(p==="teams") document.querySelector("#app").innerHTML=`<section><h2>Teams</h2><div class="grid">${TEAMS.map(t=>`<article class="card center">${logo(t.name)}<h3>${esc(t.name)}</h3><p>Captain: ${esc(t.captain)}</p><small>${esc(t.ground)}</small></article>`).join("")}</div></section>`;
 else if(p==="players") document.querySelector("#app").innerHTML=`<section><h2>Players</h2><div class="grid">${["Sanjay B R","Darshan","Yashas","Vishnu","Likith","Prajwal P.K.","Karan","Mohit"].map(n=>`<article class="card"><div class="avatar">${n[0]}</div><h3>${n}</h3><p>HPL Season 11 Player</p></article>`).join("")}</div></section>`;
 else if(p==="points") document.querySelector("#app").innerHTML=`<section><h2>Points Table</h2><table><tr><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th></tr><tr><td>Titans</td><td>3</td><td>2</td><td>1</td><td>4</td></tr><tr><td>Chesara</td><td>3</td><td>2</td><td>1</td><td>4</td></tr><tr><td>Royal Kings</td><td>3</td><td>2</td><td>1</td><td>4</td></tr><tr><td>Stars</td><td>3</td><td>1</td><td>2</td><td>2</td></tr></table></section>`;
 else document.querySelector("#app").innerHTML=`<section><h2>Season 11 Stats</h2><p>Sanjay — 402 runs</p><p>Vaibhav — 335 runs, 12 wickets</p><p>Bethell — 181 runs</p><p>Karan — 160 runs, 10 wickets</p></section>`;
 if(p==="home"||p==="matches") load();
}

async function load(){
 const box=document.querySelector("#matches");
 try{
   const snap=await db.collection("matches").get();
   const data=[]; snap.forEach(d=>data.push(d.data()));
   data.sort((a,b)=>Number(a.matchNo||0)-Number(b.matchNo||0));
   box.innerHTML=(data.length?data:fallback).map(card).join("");
 }catch(e){
   console.error(e);
   box.innerHTML=fallback.map(card).join("")+`<p class="notice">Firebase not connected yet. Showing Season 11 data from the website.</p>`;
 }
}
document.querySelector("#menuBtn").onclick=()=>document.querySelector("#nav").classList.toggle("open");
addEventListener("hashchange",page); page();