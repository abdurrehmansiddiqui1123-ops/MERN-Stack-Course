let userScore = null;
let finalScore = userScore ?? 0;
console.log(finalScore);   // Output: 0

let userScore2 = 0;
let finalScore2 = userScore2 ?? 100;
console.log(finalScore2);   // Output: 0  (kyunki 0 valid hai, null/undefined nahi)
