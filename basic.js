/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4.
 */

// 1️⃣ map - Beginner: Double each number
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]

// 2️⃣ forEach - Beginner: Log each item
nums.forEach((n) => console.log("Value:", n));

// 3️⃣ filter - Intermediate: Get even numbers
const evens = nums.filter((n) => n % 2 === 0); // [2]

// 4️⃣ find - Intermediate: Find first even number
const firstEven = nums.find((n) => n % 2 === 0); // 2

// 5️⃣ reduce - Intermediate: Sum of numbers
const sum = nums.reduce((acc, n) => acc + n, 0); // 6

// 6️⃣ filter + map - Pro: Double only even numbers
const doubledEvens = nums.filter((n) => n % 2 === 0).map((n) => n * 2); // [4]

// 7️⃣ reduce - Pro: Group items by type
const people = [
  { name: "Alice", role: "dev" },
  { name: "Bob", role: "design" },
  { name: "Eve", role: "dev" },
];
const groupedByRole = people.reduce((group, person) => {
  (group[person.role] ||= []).push(person.name);
  return group;
}, {});
// Result: { dev: ["Alice", "Eve"], design: ["Bob"] }

// 1️⃣ Basic Example
function greet(name = "Stranger") {
  return `Hello, ${name}!`;
}

greet(); // "Hello, Stranger!"
greet("Alice"); // "Hello, Alice!"

// 2️⃣ Numbers & Math
function add(a = 0, b = 0) {
  return a + b;
}

add(); // 0
add(5); // 5
add(5, 10); // 15

// 3️⃣ Arrays
function joinItems(items = []) {
  return items.join(", ");
}

joinItems(); // ""
joinItems(["apple"]); // "apple"
joinItems(["a", "b", "c"]); // "a, b, c"

// 4️⃣ Objects
function getUserInfo({ name = "Guest", age = "N/A" } = {}) {
  return `${name} (${age})`;
}

getUserInfo(); // "Guest (N/A)"
getUserInfo({ name: "Eve" }); // "Eve (N/A)"
getUserInfo({ age: 25 }); // "Guest (25)"
getUserInfo({ name: "Zed", age: 30 }); // "Zed (30)"

// 5️⃣ Functions as default
function log(msg = defaultMessage()) {
  return `[LOG] ${msg}`;
}

function defaultMessage() {
  return "No message provided";
}

log(); // "[LOG] No message provided"
log("System rebooted"); // "[LOG] System rebooted"

// 1️⃣ Simple Template String
const name = "Alice";
const greeting = `Hello, ${name}!`; // "Hello, Alice!"

// 2️⃣ Multi-line String (Preserves line breaks)
const multiLine = `
This is a
multi-line string
with indentation preserved.
`;

console.log(multiLine);

// 3️⃣ Dynamic String with Expression
const a = 5,
  b = 10;
const result = `Sum of ${a} + ${b} = ${a + b}`; // "Sum of 5 + 10 = 15"

// 1️⃣ One parameter, one-line return
const square = (n) => n * n;
square(4); // 16

// 2️⃣ Multiple parameters, one-line return
const add = (a, b) => a + b;
add(3, 4); // 7

// 3️⃣ No parameters
const hello = () => "Hi there!";
hello(); // "Hi there!"

// 4️⃣ Multiple lines (use curly braces + return)
const fullName = (first, last) => {
  const upperFirst = first.toUpperCase();
  const upperLast = last.toUpperCase();
  return `${upperFirst} ${upperLast}`;
};
fullName("john", "doe"); // "JOHN DOE"

// 5️⃣ Returning an object (wrap in parentheses)
const makeUser = (name, age) => ({
  name,
  age,
  isActive: true,
});
makeUser("Luna", 22);
// { name: "Luna", age: 22, isActive: true }
