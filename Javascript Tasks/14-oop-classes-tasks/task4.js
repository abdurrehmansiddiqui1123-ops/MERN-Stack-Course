class ElectronicProduct extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }

  getWarrantyInfo() {
    return `${this.name} comes with ${this.warranty} year(s) warranty`;
  }
}

let phone = new ElectronicProduct("Smartphone", 500, 2);
console.log(phone.getWarrantyInfo());   // Output: Smartphone comes with 2 year(s) warranty
console.log(phone.applyDiscount(20));   // Output: 400 (inherited method bhi kaam karta hai)

