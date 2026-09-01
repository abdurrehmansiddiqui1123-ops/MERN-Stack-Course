let limitedBtn = document.getElementById("limitedBtn");
let clickCount = 0;

function handleLimitedClick() {
  clickCount++;
  console.log("Clicked " + clickCount + " time(s)");

  if (clickCount === 3) {
    limitedBtn.removeEventListener("click", handleLimitedClick);
    console.log("Listener removed after 3 clicks");
  }
}

limitedBtn.addEventListener("click", handleLimitedClick);