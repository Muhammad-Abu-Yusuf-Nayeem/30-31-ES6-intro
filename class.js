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

// 🧱 1. What is a Class in JavaScript?
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }
}

// 🚗 2. Creating an Object from a Class
const myCar = new Car("Toyota", "Corolla");

myCar.startEngine(); // Output: Toyota Corolla engine started.

// 🔁 3. Multiple Objects from One Class
const car1 = new Car("Honda", "Civic");
const car2 = new Car("BMW", "X5");

car1.startEngine(); // Honda Civic engine started.
car2.startEngine(); // BMW X5 engine started.

// 🧠 4. Class Methods vs Object Properties
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
  }
}

const person1 = new Person("Araf", 24);
person1.introduce(); // Hi, I’m Araf and I’m 24 years old.

// 📦 Bonus: Default Values and Custom Methods
class Book {
  constructor(title = "Untitled", author = "Unknown") {
    this.title = title;
    this.author = author;
  }

  info() {
    return `"${this.title}" by ${this.author}`;
  }
}

const defaultBook = new Book();
console.log(defaultBook.info()); // "Untitled" by Unknown
