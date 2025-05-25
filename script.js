// ===== 1. Инициализация темы =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateButtonText();
}

// ===== 2. Обновление текста кнопки темы =====
function updateButtonText() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.textContent = currentTheme === 'light' ? '🌓 Тёмный режим' : '🌞 Светлый режим';
}

// ===== 3. Переключение темы =====
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText();
}

// ===== 4. Смена цвета фона (для colorButton) =====
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// ===== 5. Запуск всех функций при загрузке =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
});
