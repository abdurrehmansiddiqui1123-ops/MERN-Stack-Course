function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

let myCounter = createCounter();
console.log(myCounter.increment());   // 1
console.log(myCounter.increment());   // 2
console.log(myCounter.decrement());   // 1
console.log(myCounter.getValue());    // 1
