function displayInfo(city) {
  console.log(this.name + " lives in " + city);
}

let user = { name: "Sara" };
let boundDisplay = displayInfo.bind(user);
boundDisplay("Lahore");
// Output: Sara lives in Lahore
