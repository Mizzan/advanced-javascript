// closure - is a function inside another function having a access to the variable outside the chid function from parent function
function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const timerOne = stopWatch();
console.log(timerOne());
console.log(timerOne());
console.log(timerOne());
console.log(timerOne());

const timerTwo = stopWatch();
console.log(timerTwo());
console.log(timerTwo());
console.log(timerOne());
console.log(timerOne());
