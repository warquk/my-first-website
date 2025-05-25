/* Светлая тема (по умолчанию) */
:root {
    --bg-color: #f0f0f0;     /* Фон страницы */
    --content-bg: #ffffff;   /* Фон контента */
    --text-color: #000000;   /* Цвет текста */
}

/* Тёмная тема */
[data-theme="dark"] {
    --bg-color: #121212;     /* Тёмный фон страницы */
    --content-bg: #1e1e1e;  /* Тёмный фон контента */
    --text-color: #ffffff;   /* Белый текст */
}

body {
    background-color: var(--bg-color);
    margin: 0;
    padding: 20px;
    transition: background-color 0.3s;
}

.content {
    background-color: var(--content-bg);
    color: var(--text-color);
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
    transition: all 0.3s;
}

button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#colorButton {
    background: #007BFF;
    color: white;
}

#themeToggle {
    background: var(--button-bg, #4CAF50);
    color: white;
}
