function calculate(a, b, callback) {
  return callback(a, b);
}

let result1 = calculate(10, 5, (x, y) => x + y);
console.log(result1);   // Output: 15

let result2 = calculate(10, 5, (x, y) => x - y);
console.log(result2);   // Output: 5
