function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));   // Output: 8
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
// 6th number (0-indexed) = 8
