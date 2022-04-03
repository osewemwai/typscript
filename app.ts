function add(a: number, b: number) {
    return a + b;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

printResult(add(5, 12));
console.log(printResult(add(5, 22)));