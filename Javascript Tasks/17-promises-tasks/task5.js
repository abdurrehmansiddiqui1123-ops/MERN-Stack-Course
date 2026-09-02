new Promise((resolve, reject) => {
  resolve(5);
})
  .then((number) => {
    console.log("Original:", number);
    return number * 2;
  })
  .then((doubled) => {
    console.log("After multiply:", doubled);
    return doubled + 10;
  })
  .then((finalAnswer) => {
    console.log("Final Answer:", finalAnswer);
  });
