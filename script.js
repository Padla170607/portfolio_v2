// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Переключение темы
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});