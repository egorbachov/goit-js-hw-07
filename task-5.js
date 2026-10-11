const changeColorBtn = document.querySelector('.change-color');
const colorLabel = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorLabel.textContent = color;
});
