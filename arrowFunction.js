// Regular function

function addition(a, b) {
  const sum = a + b;
  return sum;
}

// Basic Arrow Function
const addition = (a, b) => {
  const sum = a + b;
  return sum;
};

// Clean One-Liner (No need for sum variable)
const addition = (a, b) => a + b;

// 🧪 Bonus: With console output
const addition = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};
