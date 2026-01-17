const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
    userInput.push(data);
});

rl.on('close', () => {
    // get the number out of the array
    let number = Number(userInput[0]);
    // let number = parseInt(userInput[0]);
    // let number = +userInput[0];
    console.log(typeof number);

    // check if the number is divisible by 7 or not
    if (number % 7 == 0) {
        // print yes if the number is divisible by 7
        console.log('yes');
    } else {
        // print no if the number is not divisible by 7
        console.log('no');
    }
});