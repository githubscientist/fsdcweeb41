// Selection Sort Technique
/*
    nums = [5, 3, 8, 4, 2, 1]

    iterate through the array from the first element <- curIndex

    curIndex = 0
        Find the index of the minimum value from index i to nums.length - 1
        minIndex = 5
        Swap the value at curIndex with the value at minIndex
        nums = [1, 3, 8, 4, 2, 5]

    curIndex = 1
        Find the index of the minimum value from index i to nums.length - 1
        minIndex = 4
        Swap the value at curIndex with the value at minIndex
        nums = [1, 2, 8, 4, 3, 5]
    
    curIndex = 2
        Find the index of the minimum value from index i to nums.length - 1
        minIndex = 4
        Swap the value at curIndex with the value at minIndex
        nums = [1, 2, 3, 4, 8, 5]
    
    curIndex = 3
        Find the index of the minimum value from index i to nums.length - 1
        minIndex = 3
        Swap the value at curIndex with the value at minIndex
        nums = [1, 2, 3, 4, 8, 5]
    
    curIndex = 4
        Find the index of the minimum value from index i to nums.length - 1
        minIndex = 5
        Swap the value at curIndex with the value at minIndex
        nums = [1, 2, 3, 4, 5, 8]
*/

/*
    nums = [5, 3, 6, 4, 2, 1]
           [0][1][2][3][4][5]
        
    curIndex = 0
        Find minimum value from curIndex to nums.length - 1
        minIndex = 5
        nums[minIndex] = 2

        swap 5, 1
        nums = [1, 3, 6, 4, 2, 5]

*/


let nums = [5, 3, 6, 4, 2, 1];

// iterate the array
for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    // find the minimum index (the minimum value is at)
    let minIndex = curIndex;
    for (let j = curIndex + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIndex]) {
            minIndex = j;
        }
    }

    // swap
    [nums[curIndex], nums[minIndex]] = [nums[minIndex], nums[curIndex]];
}

console.log(nums);