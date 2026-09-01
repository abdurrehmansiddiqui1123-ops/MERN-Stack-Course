class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value >= 0 && value <= 120) {
      this._age = value;
    } else {
      console.log("Invalid age. Must be between 0 and 120.");
    }
  }
}

let person1 = new Person("Ali", 25);
console.log(person1.age);   // Output: 25

person1.age = 150;           // Output: Invalid age. Must be between 0 and 120.
console.log(person1.age);    // Output: 25 (change nahi hua, purani value hi rahi)

person1.age = 30;
console.log(person1.age);    // Output: 30
