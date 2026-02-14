// method: insertion sort technique
var merge = function (nums1, m, nums2, n) {
    // traverse the array nums2
    for (let i = 0; i < n; i++) {
        let boxIndex = m;
        // we compare the current element from nums2 @ index i
        // with the elements in nums1 from reverse order
        // ignoring zeros in the end
        for (let j = m - 1; j >= 0; j--) {
            // nums1[j] > nums2[i]
            // we do a shift
            if (nums2[i] < nums1[j]) {
                nums1[j + 1] = nums1[j];
                // if there exists a shift
                // update the box index
                boxIndex = j;

            } else {
                break;
            }
        }

        // after we come out of the iteration
        // we insert the element from nums2 @ i to boxIndex
        nums1[boxIndex] = nums2[i];

        // update m after every insertion from nums2
        m++;
    }

    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));