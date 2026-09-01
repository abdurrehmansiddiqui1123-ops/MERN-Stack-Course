let words = ["Hello", "Hi", "World"];
let allLong = words.every(word => word.length > 3);
console.log(allLong);   // Output: false ("Hi" ki length 2 hai)
