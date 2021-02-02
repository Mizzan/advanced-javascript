// there's several ways to get undefined value in js
// 1
let aVariableThatIsNotDefined;
console.log(aVariableThatIsNotDefined);

// 2
function whichHasNoReturnValue(x, y) {
  console.log(x, y);
}

// 3
function whoseArgumentIsNotPassed(x, y) {
  console.log(x, y);
}

whoseArgumentIsNotPassed(2);

// 4
const whichCanNotFindTheParticularProperty = {
  blah: 1,
  blahTwo: "Blah Blahh",
};

const getBlah = whichCanNotFindTheParticularProperty.blahThree;
console.log(getBlah);

// 5
const whenYouAssignUndefinedExplicitly = undefined;
console.log(whenYouAssignUndefinedExplicitly);

// 6
const whenYouTryToAccessUnassignedSomethingInArray = [
  2,
  "Aha",
  "Wohoo",
  "Yay",
  "LoL",
];
console.log(whenYouTryToAccessUnassignedSomethingInArray[22]);

// Null - is something that is empty or there's nothing particular inside it.
// usually people explicitly set null values
const aVariableThatIsNull = null;
console.log(aVariableThatIsNull);
