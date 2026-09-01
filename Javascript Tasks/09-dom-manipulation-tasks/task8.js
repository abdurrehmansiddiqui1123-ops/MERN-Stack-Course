let heading = document.getElementById("mainTitle");
let newPara = document.createElement("p");
newPara.textContent = "This paragraph comes before the heading.";
heading.before(newPara);