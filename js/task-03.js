const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1) пройти по масиву обьектів отримати значення ключів об'єктів масиву
// 2) створити шаблонний рядок який кожну ітреацію впише в потік хтмл
// 3) внести значення ключів в шаблонний рядок

const listEl = document.querySelector(".gallery");

const liArray = images.map( image => { return `<li> 
<img class = "gallery-item" alt = "${image.alt}" src = "${image.url}"></li>` })

listEl.insertAdjacentHTML("afterbegin", liArray.join(""));


// const liArray = [];
// for (const item of images) {
//    liArray.push(`<li> 
//   <img class = "gallery-item" alt = "${item.alt}" src = "${item.url}"></li>`);
//  }

// const listEl = document.querySelector(".gallery");
// const liArray = [];
// const imagesList = images.map((option) => {
//   const imageListItem = document.createElement("li");
//   const imageItem = document.createElement("img");
//   imageItem.classList.add("gallery-item");
//   imageItem.alt = option.alt;
//   imageItem.src = option.url;
//   imageListItem.append(imageItem);
//   liArray.push(imageListItem.outerHTML);
//   console.log(liArray);
// });

// const gallery = document.querySelector('.gallery');
// gallery.append(...imagesList);

// listEl.insertAdjacentHTML("afterbegin", liArray.join(""));
