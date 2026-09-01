function validateAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return true;
}

try {
  validateAge(-5);
} catch (err) {
  console.log(err.message);   // Age cannot be negative
}

try {
  validateAge("twenty");
} catch (err) {
  console.log(err.message);   // Age must be a number
}
