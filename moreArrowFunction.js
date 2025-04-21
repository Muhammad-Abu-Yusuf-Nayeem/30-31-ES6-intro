// Big Regular Function
/*
    Let’s say we have a function that:
    Takes an array of numbers
    Filters out the even ones
    Doubles them
    Returns the result as a new array
*/

function processNumbers(numbers) {
  const evens = numbers.filter(function (num) {
    return num % 2 === 0;
  });

  const doubled = evens.map(function (num) {
    return num * 2;
  });

  return doubled;
}

// Converted to Arrow Function (Step-by-step)
function processNumbers(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  const doubled = evens.map((num) => num * 2);
  return doubled;
}

// Convert the whole function to an arrow function
const processNumbers = (numbers) => {
  const evens = numbers.filter((num) => num % 2 === 0);
  const doubled = evens.map((num) => num * 2);
  return doubled;
};

// Advanced
// Chain everything into a single expression (most efficient form)
const processNumbers = (numbers) =>
  numbers.filter((num) => num % 2 === 0).map((num) => num * 2);
