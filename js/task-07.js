const faderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

console.log(faderEl);
console.log(textEl);

faderEl.addEventListener("input", () => {
  textEl.style.fontSize = `${+faderEl.value}px`;
});
