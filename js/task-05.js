const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
//   let name = event.currentTarget.value;
  textOutput.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value === "") {
    textOutput.textContent = 'Anonymous'
  };
});

console.log(textInput);
