//🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶
//Normal String (Traditional way)
// 🔹 Multiline (with \n)
let normalStr = "Hello there!\nThis is a new line.";

// 🔹 Interpolation (with + operator)
let name = "Rafi";
let greet = "Hello, " + name + "! Welcome back.";

//🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶

// Template Literals (aka Template Strings)
// 🔹 Multiline (no \n needed)
let fancyStr = `Hello there!
This is a new line.`;

// 🔹 Interpolation (with ${})
name = "Rafi";
greet = `Hello, ${name}! Welcome back.`;

//🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶🧶

let a = 10;
let b = 5;
let math = `The sum is ${a + b}, and double that is ${2 * (a + b)}.`;
console.log(math);
