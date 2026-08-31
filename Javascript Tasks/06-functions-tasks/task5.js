function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5]));   // Output: 15
