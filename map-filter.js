// squaring numbers with for loop
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const outputNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   outputNumbers.push(result);
// }

// console.log(outputNumbers);

// squaring numbers with map - map returns a new array

// 1st way
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// function squareNumbers(x) {
//   return x * x;
// }

// const square = numbers.map(squareNumbers);

// 2nd way
// const square = numbers.map(function (x) {
//   return x * x;
// });
// console.log(numbers, square);

// 3rd short way with arrow

// const square = [2, 3, 4, 5, 6, 7, 8, 9].map((x) => x * x);
// console.log(square);

// filter - returns an array and the particular item you wanna find
// const bigger = numbers.filter((x) => x > 5);

// const bigger = numbers.filter((x) => x === 0); // this returns an array
// console.log(bigger);

// find - return only the item you wanna find
// const findItem = numbers.find((x) => x !== 5); // returns the first item that matches the condition
// const findItem = numbers.find((x) => x === 5); // returns not an array but the item that matches the condition
const findItem = numbers.find((x) => x === 0); // returns undefined if the particular item is not found in the array
console.log(findItem);
