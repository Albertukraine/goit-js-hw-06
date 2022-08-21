const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");

console.log(decrBtn);
console.log(incrBtn);
console.log(valueEl);

let sumValue = 0;
decrBtn.addEventListener("click", () => {
  console.log("клик минус");
  sumValue -= 1;
  console.log(sumValue);
  valueEl.textContent = `${sumValue}`;
});

incrBtn.addEventListener("click", () => {
  console.log("клик плюс");
  sumValue += 1;
  console.log(sumValue);
  valueEl.textContent = `${sumValue}`;
});
