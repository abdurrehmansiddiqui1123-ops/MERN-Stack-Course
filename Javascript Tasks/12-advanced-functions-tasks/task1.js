let car = {
  brand: "Toyota",
  showBrand: function() {
    console.log(this);         // poora 'car' object print hoga
    console.log(this.brand);   // "Toyota"
  }
};
car.showBrand();
// this = { brand: 'Toyota', showBrand: [Function] }
// this.brand = Toyota
