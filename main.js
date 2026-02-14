// hashing technique
// let s = 'guvigeeks';

/*
    Problem: find all the frequencies of characters in the string

    g - 2
    u - 1
    v - 1
    i - 1
    e - 2
    k - 1
    s - 1

    g 2
    u 1
    v 1
    i 1
    g 2
    e 2
    e 2
    k 1
    s 1
*/
// we have found all the characters count
// for (let i = 0; i < s.length; i++) {
//     let count = 0;

//     // find the count for the character s[i]
//     for (let j = 0; j < s.length; j++) {
//         if (s[i] == s[j]) count++;
//     }

//     console.log(s[i], count);
// }

// get only the unique set of characters and find their counts
// let s = 'guvigeeks';

/*
    Set

        - a datastructure
        - mathematical set operations
        - defined as a collection of unique elements
*/

// let set = new Set(s);
// let executions = 0;

// for (let char of set) {
//     let count = 0;

//     // find the count for the character s[i]
//     for (let j = 0; j < s.length; j++) {
//         if (char == s[j]) count++;
//         executions++;
//     }

//     console.log(char, count);
// }

// console.log('executions:', executions);

// let's use hashmap to find the number of characters
let s = 'guvigeeks';

let hashMap = {};

for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = 0;
}

for (let i = 0; i < s.length; i++) {
    hashMap[s[i]]++;
}

console.log(hashMap);



/*
    hashMap = {
        'g': 2,
        'u': 1,
        'v': 1,
        'i': 1,
        'e': 2,
        'k': 1,
        's': 1
    }
    
    i = 0
    s[i] = 'g'
*/