// HPL Season 11 - public website
// Loads local data.json and fills common season sections.
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('data.json');
    const data = await res.json();
    document.querySelectorAll('[data-season]').forEach(el => el.textContent = data.season || 'Season 11');
    document.querySelectorAll('[data-league]').forEach(el => el.textContent = data.league || 'HAND CRICKET PREMIER LEAGUE');
  } catch (e) {
    console.error('HPL data load error:', e);
  }
});
