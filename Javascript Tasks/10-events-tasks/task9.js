let dblClickBox = document.getElementById("dblClickBox");
dblClickBox.addEventListener("dblclick", () => {
  dblClickBox.classList.toggle("active");
  console.log("Class toggled");
});