class Shape {
  area() {
    return 0; // base class ka default
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let myCircle = new Circle(5);
let myRectangle = new Rectangle(4, 6);

console.log(myCircle.area().toFixed(2)); // Output: 78.54
console.log(myRectangle.area()); // Output: 24
