function add(a: number, b: number) {
  return a + b;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

addAndHandle(31, 10, (result) => {
  console.log(result);
});

printResult(add(5, 12));
console.log(printResult(add(5, 22)));

// Combine function is a function with 2 parameters of type number
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));
