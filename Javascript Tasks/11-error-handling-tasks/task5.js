try {
  let notAFunction = 5;
  notAFunction();   // TypeError - number call nahi ho sakta
} catch (err) {
  console.log(err.name);      // TypeError
  console.log(err.message);   // notAFunction is not a function
}
