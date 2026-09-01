let myLink = document.getElementById("myLink");
myLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link clicked but not navigated");
});