// continue
const myNumbers = [1, 2, 3, -34, -47, 4, -25, 5, -22, 6, 7, 8, 32];
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] < 0) {
    continue; // continue ignores what the condition matches
  }
  //   console.log(myNumbers[i]);
}

// breaks
// breaks - breaks ( stops running ) if the condition matches
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] < 0) {
    break;
  }
  console.log(myNumbers[i]);
}
