let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "yellow";
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "";
});