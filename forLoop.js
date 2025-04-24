// Example of a traditional for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0 to 4
}

// Example of a for...of loop
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  console.log(num); // Prints 10, 20, 30, 40, 50
}


// Example of a for...in loop (for objects)
const person = {
  name: "John",
  age: 30,
  country: "Bangladesh",
};
for (const key in person) {
  console.log(key, person[key]);
  // Prints:
  // name John
  // age 30
  // country Bangladesh
}


// Example of a forEach loop
numbers = [10, 20, 30, 40, 50];
numbers.forEach((num) => {
  console.log(num); // Prints 10, 20, 30, 40, 50
});
