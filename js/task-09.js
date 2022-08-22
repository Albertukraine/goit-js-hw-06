function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorBtn = bodyEl.querySelector('.change-color');


colorBtn.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
});

