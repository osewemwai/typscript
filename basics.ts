function add(a: number, b: number, showResult: boolean) {
  const result = a + b;
  if (showResult) {
    console.log("The result is: " + result);
  } else {
    return result;
  }
}

const number1 = 51; // 51.0
const number2 = 20;
const printResult = true;




add(number1, number2, printResult);

