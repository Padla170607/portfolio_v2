// Текущий год в footer
document.getElementById('year').textContent = new Date().getFullYear();

// Переключение светлой/тёмной темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});