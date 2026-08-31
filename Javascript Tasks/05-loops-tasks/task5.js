let student = {
  name: "Ali",
  age: 22,
  city: "Lahore"
};
for (let key in student) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Ali
// age: 22
// city: Lahore
