let counterBtn = document.getElementById("counterBtn");
let counterDisplay = document.getElementById("counterDisplay");
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});