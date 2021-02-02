const numberTwo = 2;
const stringTwo = "2";

// double equal will try to match it as mush as it can
// double equal will only check values
if (numberTwo == stringTwo) {
  console.log("YaY, both are number.");
} else {
  console.log("Wait a minute, There's something fishy here.");
}

// triple equal will try to match it as mush as it can
// triple equal will check values and types
if (numberTwo === stringTwo) {
  console.log("YaY, both are number.");
} else {
  console.log("Wait a minute, There's something fishy here.");
}
