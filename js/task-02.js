const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(ingredient => {
const listItem = document.createElement('li');
listItem.classList.add('item');
listItem.textContent = ingredient;
return listItem;
})

// console.log(...elements);
const list = document.querySelector('#ingredients');

list.append(...elements);


