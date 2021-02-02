// Falsy values
// 0
// -0
// '' - empty string
// undefined
// null
// NaN

// Everything else is truthy values
// so when I would write only the truthy values without any condition logic it will check if it is truthy or falsy then it will run
const falsy = "";
const truthy = "0";
if (truthy) {
  console.log("Condition is Truthy");
} else {
  console.log("Condition is Falsy");
}
