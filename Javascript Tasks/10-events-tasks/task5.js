let itemList = document.getElementById("itemList");

itemList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});