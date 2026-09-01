try {
  console.log(undefinedVariable);
} catch (err) {
  console.log("Caught:", err.message);
}
// Output: Caught: undefinedVariable is not defined
