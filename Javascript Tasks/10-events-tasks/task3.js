let myForm = document.getElementById("myForm");
let nameInput = document.getElementById("nameInput");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted value:", nameInput.value);
});