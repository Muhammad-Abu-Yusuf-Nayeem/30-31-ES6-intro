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
