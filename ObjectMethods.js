// 🌟 Simple Object
const user = {
  name: "Rahim",
  age: 25,
};

// 1️⃣ Object.keys()
console.log(Object.keys(user));
// → ['name', 'age']

// 2️⃣ Object.values()
console.log(Object.values(user));
// → ['Rahim', 25]

// 3️⃣ Object.entries()
console.log(Object.entries(user));
// → [['name', 'Rahim'], ['age', 25]]

// 4️⃣ Object.fromEntries()
const entries = [
  ["city", "Dhaka"],
  ["country", "Bangladesh"],
];
const location = Object.fromEntries(entries);
console.log(location);
// → { city: 'Dhaka', country: 'Bangladesh' }

// 5️⃣ Object.assign()
const extra = { gender: "male" };
const merged = Object.assign({}, user, extra);
console.log(merged);
// → { name: 'Rahim', age: 25, gender: 'male' }

// 6️⃣ Object.hasOwn()
console.log(Object.hasOwn(user, "age"));
// → true

console.log(Object.hasOwn(user, "email"));
// → false

// 7️⃣ Object.freeze()
const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // ❌ Won't change
console.log(frozen);
// → { a: 1 }

// 8️⃣ Object.seal()
const sealed = Object.seal({ b: 2 });
sealed.b = 3; // ✅ Can modify
sealed.c = 4; // ❌ Can't add new
console.log(sealed);
// → { b: 3 }

// 9️⃣ Object.is()
console.log(Object.is(NaN, NaN));
// → true
console.log(Object.is(+0, -0));
// → false

// 🔟 Object.create()
const proto = { greet: () => "Hi" };
const newUser = Object.create(proto);
newUser.name = "Karim";
console.log(newUser.name); // → "Karim"
console.log(newUser.greet()); // → "Hi"

// 1️⃣1️⃣ Object.defineProperty()
const obj1 = {};
Object.defineProperty(obj1, "secret", {
  value: "hidden",
  writable: false,
});
obj1.secret = "shown"; // ❌ Won't change
console.log(obj1.secret);
// → 'hidden'

// 1️⃣2️⃣ Object.defineProperties()
const obj2 = {};
Object.defineProperties(obj2, {
  x: { value: 10, writable: true },
  y: { value: 20, writable: false },
});
console.log(obj2);
// → { x: 10, y: 20 }

// 1️⃣3️⃣ Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(user));
// → ['name', 'age']

// 1️⃣4️⃣ Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
  → {
    value: 'Rahim',
    writable: true,
    enumerable: true,
    configurable: true
  }
  */

// 1️⃣5️⃣ Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(user));
/*
  → {
    name: { value: 'Rahim', writable: true, enumerable: true, configurable: true },
    age: { value: 25, writable: true, enumerable: true, configurable: true }
  }
  */

// 1️⃣6️⃣ Object.getPrototypeOf()
console.log(Object.getPrototypeOf(user));
// → {} or Object.prototype

// 1️⃣7️⃣ Object.setPrototypeOf()
const animal = { eats: true };
Object.setPrototypeOf(user, animal);
console.log(user.eats);
// → true

// 1️⃣8️⃣ Object.isFrozen()
console.log(Object.isFrozen(frozen));
// → true

// 1️⃣9️⃣ Object.isSealed()
console.log(Object.isSealed(sealed));
// → true

// 2️⃣0️⃣ Object.isExtensible()
console.log(Object.isExtensible(user));
// → true (unless you use preventExtensions)

// 2️⃣1️⃣ Object.preventExtensions()
const limited = { x: 1 };
Object.preventExtensions(limited);
limited.y = 2; // ❌ Won’t be added
console.log(limited);
// → { x: 1 }
console.log(Object.isExtensible(limited));
// → false
