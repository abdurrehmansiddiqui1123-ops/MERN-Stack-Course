function multiplyByDefault(num, multiplier = 2) {
  return num * multiplier;
}
console.log(multiplyByDefault(5));       // Output: 10 (default 2 use hua)
console.log(multiplyByDefault(5, 4));    // Output: 20 (4 diya, wahi use hua)
