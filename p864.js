const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let [rows, cols] = userInput[0].split(' ');

    rows = Number(rows);
    cols = Number(cols);

    // Method 1
    // run a loop for rows number of times
    // for (let j = 1; j <= rows; j++) {
    //     // print 5(cols number of times) stars in a row
    //     let stars = [];
    //     for (let i = 1; i <= cols; i++) {
    //         stars.push('*');
    //     }
    //     console.log(stars.join(' '));
    // }

    // Method 2
    // create an array with cols stars
    // initialize an empty array
    let stars = [];

    // insert cols number of stars or '*' into the array
    for (let i = 1; i <= cols; i++) {
        stars.push('*');
    }

    // print the array for rows times
    for (let i = 1; i <= rows; i++) {
        console.log(stars.join(' '));
    }

});