const textInput = document.querySelector("#validation-input");
const validNumber = +textInput.dataset.length;

// console.log(textInput);
// console.log(validNumber);

textInput.classList.add("validation-input");
// console.log(textInput.classList);

textInput.addEventListener("blur", () => {
  textInput.classList.add("invalid");
  textInput.classList.remove("valid");

  if (textInput.value.length === 0) {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");
  }
  if (textInput.value.length === validNumber) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }

  // console.log(textInput.value.length === validNumber);
  //  console.log('блюр');
  //  console.log(textInput.value.length);
  //  console.log(validNumber);
  //  console.log(textInput.classList);
  //  console.log(textInput);
});
