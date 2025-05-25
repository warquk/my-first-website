const button = document.createElement('button');
button.className = 'button';
button.textContent = 'Нажми меня';
document.body.appendChild(button);

button.addEventListener('click', () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});