let falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
  if (value) {
    console.log(value, "-> truthy");
  } else {
    console.log(value, "-> falsy");
  }
});
// Output: false -> falsy, 0 -> falsy, '' -> falsy, null -> falsy, undefined -> falsy, NaN -> falsy

