// Two Pointers Technique
// to reverse an array
// let numbers = [4, 2, 5, 7, 1, 3, 6];

/*
    Problem: To reverse an array in in-place

    output:

    [6, 3, 1, 7, 5, 2, 4]
*/

// Method 1
// create another array to copy the elements of numbers in reverse order
// let reversed = [];
// let executions = 0;

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
//     executions++;
// }

// for (let i = 0; i < reversed.length; i++) {
//     numbers[i] = reversed[i];
// }


// console.log(reversed);
// console.log('The number of executions =', executions);
// console.log(numbers);

// Method 2
// two pointers technique
let numbers = [4, 2, 5, 7, 1, 3, 6];

/*
    [6, 3, 1, 7, 5, 2, 4]
    [0][1][2][3][4][5][6]

    left = 4
    numbers[left] = 

    right = 2
    numbers[right] = 

    we only swap as long as left < right

    left == right or left > right -> we stop the traversal
*/

// set two pointers
// left pointer: points to the starting index
let left = 0;

// right pointer: points to the ending index
let right = numbers.length - 1;

let executions = 0;

while (left < right) {
    // swap the values at left and right indexes
    [numbers[left], numbers[right]] = [numbers[right], numbers[left]];

    left++;
    right--;

    executions++;
}

console.log(numbers);

console.log('the number of executions = ', executions);