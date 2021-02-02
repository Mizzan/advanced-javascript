// accessing the array items and putting the values using the for loop

const students = [
  { age: 59, name: "Tom Hanks" },
  { age: 65, name: "Diego" },
  { age: 77, name: "Santino" },
  { age: 26, name: "Sanchez" },
  { age: 22, name: "Mario" },
  { age: 36, name: "Lalana" },
  { age: 19, name: "Martino" },
  { age: 27, name: "Suarez" },
  { age: 26, name: "Luis" },
];

// const output = [];
// for (let i = 0; i < students.length; i++) {
//   const element = students[i].name;
//   output.push(element);
// }
// console.log(output);

// using the map
// students.map((x) => x.name);
// console.log(output);

// filter returns an array
// using the filter to find items age higher than 40
// const output = students.filter((x) => x.age < 40);

// using the find
const findPerson = students.find((x) => x.age === 19);
// find - finds first items matches the conditioin and the particular item and returns it without but not the array
console.log(findPerson);
