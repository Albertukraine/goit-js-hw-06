const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener("submit", (event) => {
event.preventDefault();
const { elements: { email, password }} = event.currentTarget;

console.log(email.value, password.value);
console.log(email.value.length, password.value.length);

if (email.value.length === 0 && password.value.length === 0) {
   alert('Хазяїне, введіть щось в ті поля!')
};
if (email.value.length !== 0 && password.value.length !== 0) {
   const userData = {};
   userData.email = email.value;
   userData.password = password.value;
   console.log(userData);
   formEl.reset();
}

});







