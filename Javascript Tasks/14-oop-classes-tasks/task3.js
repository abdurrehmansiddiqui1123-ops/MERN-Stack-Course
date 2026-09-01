class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(percentage) {
    this.price = this.price - (this.price * percentage / 100);
    return this.price;
  }
}

let laptop = new Product("Laptop", 1000);
console.log(laptop.applyDiscount(10));   // Output: 900

