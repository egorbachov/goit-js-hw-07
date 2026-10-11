const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100;
const START_SIZE = 30;
const SIZE_STEP = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const markup = Array.from({ length: amount }, (_, index) => {
    const size = START_SIZE + index * SIZE_STEP;

    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
  }).join('');

  boxes.innerHTML = markup;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (!Number.isInteger(amount) || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
