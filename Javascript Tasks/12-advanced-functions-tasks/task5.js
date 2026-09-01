for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("Value:", i);
  }, 100);
}
// Output (100ms baad): Value: 0, Value: 1, Value: 2
// let block-scoped hai, isliye har iteration ka apna alag 'i' hai
