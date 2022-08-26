function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueEl = document.querySelector("input");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById("boxes");
const controlsEl = document.getElementById("controls");

console.log(valueEl);

console.log(createButtonEl);
console.log(destroyButtonEl);
console.log(boxesEl);

let size = 30;
createButtonEl.addEventListener("click", () => {
  let currentValue = valueEl.value;
  console.log("текущее значение", +currentValue);
  
  let count = +currentValue;
  for (let i = 0; i < count; i += 1) {
    const boxJS = document.createElement("div");

    size += 10;
    boxJS.style.width = `${size}px`;
    boxJS.style.height = `${size}px`;
    boxJS.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxJS);
    
  }
});

destroyButtonEl.addEventListener("click", () => {
  boxesEl.remove(boxesEl);
  controlsEl.insertAdjacentHTML("afterend", `<div id="boxes"></div>` );
  
  
});
