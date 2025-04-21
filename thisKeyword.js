// 🎯 SECTION 1: Using `this` in a Regular Function inside an Object
const user = {
  name: "Rafi",

  // 👋 Regular function (method) — uses `this` correctly
  greet: function () {
    return `Hello, my name is ${this.name}`; // ✅ `this` refers to the `user` object
  },
};

console.log(user.greet()); // 👉 "Hello, my name is Rafi"

// 🚫 SECTION 2: Arrow Function inside Object — `this` doesn't work as expected
const userArrow = {
  name: "Rafi",

  // ⚠️ Arrow function doesn't have its own `this`
  greet: () => {
    return `Hello, my name is ${this.name}`; // ❌ `this` is NOT the userArrow object
  },
};

console.log(userArrow.greet()); // 👉 "Hello, my name is undefined"

// 🧠 Arrow functions do NOT bind their own `this`.
// 🚫 Don't use arrow functions as object methods if you rely on `this`.

// ✅ Regular functions bind `this` to the object they are in — perfect for methods.
// 👍 Use `this` inside regular functions when working with object properties.

// 🧪 Want to Experiment?
const user = {
  name: "Rafi",
  greet: function () {
    console.log(this); // 👉 logs the `user` object
  },
};

user.greet();
