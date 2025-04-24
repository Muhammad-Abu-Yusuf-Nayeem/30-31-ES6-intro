// -------------------------
// 1. Using `this` keyword in object methods
// -------------------------

const person = {
  name: "Araf",
  age: 24,
  introduce: function () {
    // 'this' refers to the person object
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

person.introduce(); // Output: Hi, I'm Araf and I'm 24 years old.

// -------------------------
// 2. Dot Notation vs Bracket Notation
// -------------------------

const car = {
  brand: "Toyota", // Valid key for dot notation
  "car-model": "Corolla", // Not valid for dot notation due to hyphen
  color: "Red",
};

// Dot notation - when property name is a valid identifier
console.log(car.brand); // Output: Toyota
console.log(car.color); // Output: Red

// Bracket notation - when property name has special characters or is dynamic
console.log(car["car-model"]); // Output: Corolla

// Accessing using variable key (dynamic access)
let key = "color";
console.log(car[key]); // Output: Red

// -------------------------
// 3. Combining All Concepts in One Practical Example
// -------------------------

const student = {
  name: "Nayeem",
  age: 20,
  grades: {
    math: 90,
    physics: 85,
  },
  greet: function () {
    // 'this' refers to the student object
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  },
  getGrade: function (subject) {
    // Bracket notation allows dynamic access to nested properties
    return this.grades[subject];
  },
};

// Calling method using dot notation
student.greet(); // Output: Hello, I'm Nayeem and I'm 20 years old.

// Accessing nested properties using bracket notation
console.log(student.getGrade("math")); // Output: 90
console.log(student["grades"]["physics"]); // Output: 85
