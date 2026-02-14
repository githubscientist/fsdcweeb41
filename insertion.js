let nums = [3, 5, 8, 2, 6, 7, 4, 1];

// traverse an array from first index to the last index
for (let i = 0; i < nums.length; i++) {

    let box = i;
    let boxValue = nums[box];

    // for the current index i, we iterate from i-1 to 0
    for (let j = i - 1; j >= 0; j--) {
        // compare the element at i with j
        if (boxValue < nums[j]) {
            // shift
            nums[box] = nums[j];

            // update the box index
            box = j;
        } else {
            break;
        }
    }

    nums[box] = boxValue;
}

console.log(nums);

/*
    nums = [1, 2, 3, 4, 5, 6, 7, 8]
           [0][1][2][3][4][5][6][7]

    i = 0
    box = i
    boxValue = 3

    i = 1
    box = 1
    boxValue = 5

    i = 2
    box = 2
    boxValue = 8

    i = 4
    box = 4
    boxValue = 6

    nums[box] = nums[j]

*/