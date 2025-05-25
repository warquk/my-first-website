// ===== Кнопка "Нажми меня" (меняет фон) =====
const colorButton = document.createElement('button');
colorButton.textContent = 'Нажми меня';
colorButton.style.margin = '10px'; // Добавим отступ
document.body.appendChild(colorButton);

colorButton.addEventListener('click', () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// ===== Кнопка переключения темы =====
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓 Тёмный режим';
themeToggle.id = 'themeToggle'; // Важно для CSS
document.body.appendChild(themeToggle);

// Проверяем сохранённую тему при загрузке
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '🌞 Светлый режим' : '🌓 Тёмный режим';
});
