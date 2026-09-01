let numbers = [3, 7, 2, 9, 4];
let maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);   // Output: 9

// Modern alternative (spread operator se, jo aapne pehle seekha hai):
let maxNumber2 = Math.max(...numbers);
console.log(maxNumber2);   // Output: 9