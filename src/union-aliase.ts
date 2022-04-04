type Combinable = number | string;

function combine(
  a: Combinable,
  b: Combinable,
  resultConversion: string
) {
  let result;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAge = combine(15, 10, "as-number");
console.log(combinedAge);
const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
const combineName = combine("Shadrack ", "Osewe", "as-text");
console.log(combineName);
