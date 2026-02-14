var twoSum = function (nums, target) {
    // create a hashmap
    let hashmap = {};

    // traverse the array
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in hashmap) {
            // it means we found a pair
            return [i, hashmap[target - nums[i]]];
        } else {
            // we did not find any pair yet
            // so, we make an entry for the already seen element
            // nums[i]
            hashmap[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 4, 3, 5, 7, 8], 8));

/*
    hashmap = {
        2: 0,
        4: 1,
        3: 2,

    }

    [3, 2]
*/