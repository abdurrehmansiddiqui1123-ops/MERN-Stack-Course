function createDiscount(percentage) {
  return function(price) {
    let discountAmount = price * (percentage / 100);
    return price - discountAmount;
  };
}

let tenPercentOff = createDiscount(10);
let twentyPercentOff = createDiscount(20);

console.log(tenPercentOff(1000));      // 900
console.log(twentyPercentOff(1000));   // 800
