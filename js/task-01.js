const catEl = document.querySelectorAll(".item");

// довжина масиву
const catNumber = catEl.length;

console.log(`Number of categories: ${catNumber}`);
// для кожного елементу масиву консолимо контент та довжину внутрішнього масиву
const catContent = catEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
