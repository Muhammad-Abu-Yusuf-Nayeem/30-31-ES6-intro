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
  
  greet();           // "Hello, Stranger!"
  greet("Alice");    // "Hello, Alice!"
  
  // 2️⃣ Numbers & Math
  function add(a = 0, b = 0) {
    return a + b;
  }
  
  add();         // 0
  add(5);        // 5
  add(5, 10);    // 15
  
  // 3️⃣ Arrays
  function joinItems(items = []) {
    return items.join(", ");
  }
  
  joinItems();                // ""
  joinItems(["apple"]);       // "apple"
  joinItems(["a", "b", "c"]); // "a, b, c"
  
  // 4️⃣ Objects
  function getUserInfo({ name = "Guest", age = "N/A" } = {}) {
    return `${name} (${age})`;
  }
  
  getUserInfo();                            // "Guest (N/A)"
  getUserInfo({ name: "Eve" });             // "Eve (N/A)"
  getUserInfo({ age: 25 });                 // "Guest (25)"
  getUserInfo({ name: "Zed", age: 30 });    // "Zed (30)"
  
  // 5️⃣ Functions as default
  function log(msg = defaultMessage()) {
    return `[LOG] ${msg}`;
  }
  
  function defaultMessage() {
    return "No message provided";
  }
  
  log();                   // "[LOG] No message provided"
  log("System rebooted");  // "[LOG] System rebooted"
  