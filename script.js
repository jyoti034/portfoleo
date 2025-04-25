const btn = document.getElementById('theme-toggle');
// Load saved theme or default to dark
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
btn.textContent = saved === 'dark' ? '☀️' : '🌙';

btn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.textContent = next === 'dark' ? '☀️' : '🌙';
});
