let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = data
  .filter(num => num % 2 === 0)      // [2, 4, 6, 8, 10]
  .map(num => num * num)              // [4, 16, 36, 64, 100]
  .reduce((acc, num) => acc + num, 0); // 220

console.log(result);   // Output: 220