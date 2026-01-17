const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0];

    // for...of loop
    // index = 0, 1, 2, 3, 4, 5, 6, 7
    for (let index in str) {
        console.log(str[index]);
    }
});