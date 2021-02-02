const myNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice - method
// slice takes index start number and index end number and returns new array does not change the original array
const likedNumbers = myNumbers.slice(1, 8);
// console.log(myNumbers);
// console.log(likedNumbers);

// splice method
// splice - takes index start number then deleteCount numbers ( how many ) and changes the original array and from original array removes items that were deleted by deleteCount input
// const spliceMethod = myNumbers.splice(2, 5);
// console.log(spliceMethod, myNumbers);

// join - method - joins an array with anything put inside in it and it puts the array items inside a string, not changing the original array
const emojiJoin = myNumbers.join(" ➕ ");
console.log(emojiJoin, typeof emojiJoin);
console.log(myNumbers);
