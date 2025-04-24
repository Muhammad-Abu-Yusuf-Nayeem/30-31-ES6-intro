/*
🧬 What is Inheritance?
Inheritance allows one class or object to acquire properties and methods from another. It promotes code reuse and hierarchical structure.

JavaScript supports two main forms:

✅ Prototypical inheritance (core concept in JS)

✅ Class-based inheritance (introduced in ES6 but built on prototypes)

🧪 What is Prototypical Inheritance?
Every object in JavaScript has an internal link to another object called its prototype. When trying to access a property or method on an object, JavaScript will:

Check the object itself.

If not found, it checks the object's prototype.

If still not found, it keeps going up the prototype chain (__proto__) until it finds it or reaches null.
*/

// 🧱 Example: Prototypical Inheritance with Object.create()

const animal = {
  eat() {
    console.log("This animal eats food.");
  },
};

// Create a new object that inherits from `animal`
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.eat(); // Inherited from animal
dog.bark(); // Defined on dog itself

// 🏛️ Prototype Chain Visualization
dog-- > animal-- > Object.prototype-- > null;

// 🧑‍🏫 Inheritance Using ES6 Classes (Simpler Syntax)
class Animal {
  eat() {
    console.log("Animal eats.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks.");
  }
}

const myDog = new Dog();
myDog.eat(); // Inherited
myDog.bark(); // Own method

// 🔍 Behind the Scenes (Prototype Chain with ES6):
Dog.prototype.__proto__ === Animal.prototype; // true

// 🔧 Custom Prototype Inheritance (Old Style)

function Animal() {}
Animal.prototype.eat = function () {
  console.log("Animal eats.");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype); // Inherit
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Dog barks.");
};

const dog = new Dog();
dog.eat(); // Inherited
dog.bark(); // Own
