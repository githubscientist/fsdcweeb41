/*
    Sorting Algorithms:

    1. Bubble Sort
    2. Selection Sort
    3. Insertion Sort
    4. Merge Sort
    5. Quick Sort
    6. Heap Sort
    7. Radix Sort
    8. Counting Sort
    9. Bucket Sort

    Bubble Sort: Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

    Example: 

    nums = [5, 2, 6, 3, 1, 4]

    Pass 1: 

    Compare values @ indexes 0, 1: [2, 5, 6, 3, 1, 4] (5 and 2 are swapped)
    Compare values @ indexes 1, 2: [2, 5, 6, 3, 1, 4] (5 and 6 are not swapped)
    Compare values @ indexes 2, 3: [2, 5, 3, 6, 1, 4] (6 and 3 are swapped)
    Compare values @ indexes 3, 4: [2, 5, 3, 1, 6, 4] (6 and 1 are swapped)
    Compare values @ indexes 4, 5: [2, 5, 3, 1, 4, 6] (6 and 4 are swapped)

    Pass 2:

    Compare values @ indexes 0, 1: [2, 5, 3, 1, 4, 6] (2 and 5 are not swapped)
    Compare values @ indexes 1, 2: [2, 3, 5, 1, 4, 6] (5 and 3 are swapped)
    Compare values @ indexes 2, 3: [2, 3, 1, 5, 4, 6] (5 and 1 are swapped)
    Compare values @ indexes 3, 4: [2, 3, 1, 4, 5, 6] (5 and 4 are swapped)
    Compare values @ indexes 4, 5: [2, 3, 1, 4, 5, 6] (5 and 6 are not swapped)

    Pass 3:
    
    Compare values @ indexes 0, 1: [2, 3, 1, 4, 5, 6] (2 and 3 are not swapped) 
    Compare values @ indexes 1, 2: [2, 1, 3, 4, 5, 6] (3 and 1 are swapped)
    Compare values @ indexes 2, 3: [2, 1, 3, 4, 5, 6] (3 and 4 are not swapped)
    Compare values @ indexes 3, 4: [2, 1, 3, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [2, 1, 3, 4, 5, 6] (5 and 6 are not swapped)

    Pass 4:
    
    Compare values @ indexes 0, 1: [1, 2, 3, 4, 5, 6] (2 and 1 are swapped)
    Compare values @ indexes 1, 2: [1, 2, 3, 4, 5, 6] (2 and 3 are not swapped)
    Compare values @ indexes 2, 3: [1, 2, 3, 4, 5, 6] (3 and 4 are not swapped)
    Compare values @ indexes 3, 4: [1, 2, 3, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [1, 2, 3, 4, 5, 6] (5 and 6 are not swapped)

    Pass 5:
    
    Compare values @ indexes 0, 1: [1, 2, 3, 4, 5, 6] (1 and 2 are not swapped)
    Compare values @ indexes 1, 2: [1, 2, 3, 4, 5, 6] (2 and 3 are not swapped)
    Compare values @ indexes 2, 3: [1, 2, 3, 4, 5, 6] (3 and 4 are not swapped)
    Compare values @ indexes 3, 4: [1, 2, 3, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [1, 2, 3, 4, 5, 6] (5 and 6 are not swapped)

    The list is now sorted.

    Example: 

    nums = [6, 5, 4, 3, 2, 1]

    Pass 1:

    Compare values @ indexes 0, 1: [5, 6, 4, 3, 2, 1] (6 and 5 are swapped)
    Compare values @ indexes 1, 2: [5, 4, 6, 3, 2, 1] (6 and 4 are swapped)
    Compare values @ indexes 2, 3: [5, 4, 3, 6, 2, 1] (6 and 3 are swapped)
    Compare values @ indexes 3, 4: [5, 4, 3, 2, 6, 1] (6 and 2 are swapped)
    Compare values @ indexes 4, 5: [5, 4, 3, 2, 1, 6] (6 and 1 are swapped)

    Pass 2:

    Compare values @ indexes 0, 1: [4, 5, 3, 2, 1, 6] (5 and 4 are swapped)
    Compare values @ indexes 1, 2: [4, 3, 5, 2, 1, 6] (5 and 3 are swapped)
    Compare values @ indexes 2, 3: [4, 3, 2, 5, 1, 6] (5 and 2 are swapped)
    Compare values @ indexes 3, 4: [4, 3, 2, 1, 5, 6] (5 and 1 are swapped)
    Compare values @ indexes 4, 5: [4, 3, 2, 1, 5, 6] (5 and 6 are not swapped)

    Pass 3:

    Compare values @ indexes 0, 1: [3, 4, 2, 1, 5, 6] (4 and 3 are swapped)
    Compare values @ indexes 1, 2: [3, 2, 4, 1, 5, 6] (4 and 2 are swapped)
    Compare values @ indexes 2, 3: [3, 2, 1, 4, 5, 6] (4 and 1 are swapped)
    Compare values @ indexes 3, 4: [3, 2, 1, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [3, 2, 1, 4, 5, 6] (5 and 6 are not swapped)

    Pass 4:

    Compare values @ indexes 0, 1: [2, 3, 1, 4, 5, 6] (3 and 2 are swapped)
    Compare values @ indexes 1, 2: [2, 1, 3, 4, 5, 6] (3 and 1 are swapped)
    Compare values @ indexes 2, 3: [2, 1, 3, 4, 5, 6] (3 and 4 are not swapped)
    Compare values @ indexes 3, 4: [2, 1, 3, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [2, 1, 3, 4, 5, 6] (5 and 6 are not swapped)

    Pass 5:

    Compare values @ indexes 0, 1: [1, 2, 3, 4, 5, 6] (2 and 1 are swapped)
    Compare values @ indexes 1, 2: [1, 2, 3, 4, 5, 6] (2 and 3 are not swapped)
    Compare values @ indexes 2, 3: [1, 2, 3, 4, 5, 6] (3 and 4 are not swapped)
    Compare values @ indexes 3, 4: [1, 2, 3, 4, 5, 6] (4 and 5 are not swapped)
    Compare values @ indexes 4, 5: [1, 2, 3, 4, 5, 6] (5 and 6 are not swapped)

    The list is now sorted.
*/

// Bubble Sort
let nums = [6, 5, 4, 3, 2, 1];

for (let j = 1; j <= nums.length - 1; j++) {
    // iterate through the adjacent pairs
    for (let i = 0; i < nums.length - 1; i++) {
        // compare the values at i and i+1
        if (nums[i] > nums[i + 1]) {
            // we need a swap
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        }
    }
}

console.log(nums);