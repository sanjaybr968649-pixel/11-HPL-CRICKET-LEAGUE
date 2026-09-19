// HPL Season 11 - Admin helpers
// Firebase SDK should be loaded by admin.html before using this file.
document.addEventListener('DOMContentLoaded', () => {
  const status = document.querySelector('[data-admin-status]');
  if (status) status.textContent = 'HPL Season 11 Admin';
});
