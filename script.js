// Проверка сохранённой темы при загрузке
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

const button = document.createElement('button');
button.className = 'button';
button.textContent = 'Нажми меня';
document.body.appendChild(button);

button.addEventListener('click', () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
const themeToggle = document.getElementById("themeToggle");

// Проверяем сохранённую тему (если есть)
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Обработчик клика
themeToggle.addEventListener("click", () => {
  const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  
  // Меняем тему и сохраняем в localStorage
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  // Меняем иконку на кнопке
  themeToggle.textContent = newTheme === "dark" ? "🌞 Светлая тема" : "🌓 Тёмная тема";
});

// Устанавливаем начальную иконку
themeToggle.textContent = currentTheme === "dark" ? "🌞 Светлая тема" : "🌓 Тёмная тема";
