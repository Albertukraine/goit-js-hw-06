const catEl = document.querySelectorAll(".item");

const nameEl = document.querySelectorAll(".item > h2");

const numberOfItemsEl = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${catEl.length}`);
console.log(`Category: ${nameEl[0].textContent}`);
console.log(`Elements: ${numberOfItemsEl[0].childElementCount}`);
console.log(`Category: ${nameEl[1].textContent}`);
console.log(`Elements: ${numberOfItemsEl[1].childElementCount}`);
console.log(`Category: ${nameEl[2].textContent}`);
console.log(`Elements: ${numberOfItemsEl[2].childElementCount}`);
