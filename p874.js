const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = +userInput[0];
    for (let row = 1, odds = 1; row <= n; row++, odds += 2) {
        let numbers = [];

        //inser the spaces
        for (let spaces = n - row; spaces >= 1; spaces--) {
            numbers.push(' ');
        }

        //populate the arrya with values starting from row and eding with ods in a 
        //natural number order
        for (let value = row; value <= odds; value++) {
            numbers.push(value);
        }
        //populate the array again with values startin gfrom odds and ending with rows
        for (let value = odds - 1; value >= row; value--) {
            numbers.push(value);
        }
        console.log(numbers.join(''));
    }
});