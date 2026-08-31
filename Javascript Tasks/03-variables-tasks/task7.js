var studentVar = "Sara";
let studentLet = "Ayesha";
const studentConst = "Bilal";

console.log(studentVar); // Sara
console.log(studentLet); // Ayesha
console.log(studentConst); // Bilal

// Ab teeno ka behavior test karo:

// var → reassign bhi, redeclare bhi allowed
studentVar = "Sara 2.0";
var studentVar = "Sara 3.0";
console.log(studentVar); // Sara 3.0 (dono chal gaye, koi error nahi)

// let → sirf reassign allowed, redeclare nahi
studentLet = "Ayesha 2.0";
console.log(studentLet); // Ayesha 2.0
// let studentLet = "Fatima";   Error agar yeh line uncomment ki

// const → dono mein se kuch nahi allowed
// studentConst = "Bilal 2.0";       Error - reassign nahi hota
// const studentConst = "Zain";      Error - redeclare nahi hota
