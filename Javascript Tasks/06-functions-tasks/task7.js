function findMax(...numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax(3, 7, 2, 9, 4));   // Output: 9
console.log(findMax(15, 8, 22, 1));    // Output: 22
