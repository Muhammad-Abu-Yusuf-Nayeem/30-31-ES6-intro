// Define a class named Person
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age; // property
  }

  // method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// Create an object from the class
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.

// Define a subclass named Student that extends Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call the parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const student1 = new Student("Bob", 17, 10);
student1.greet(); // From parent class
student1.study(); // From child class

class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  // getter
  get price() {
    return this._price;
  }

  // setter
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("Price must be positive!");
    }
  }
}

const item = new Product("Laptop", 1000);
console.log(item.price); // 1000
item.price = 1200;
console.log(item.price); // 1200
item.price = -5; // Price must be positive!
