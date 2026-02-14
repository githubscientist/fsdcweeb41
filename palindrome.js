/*
    s = 'malayalam'

    s = 'dad'

    s = 'madam'
*/
let s = 'malayalak';

function isPalindrome(s) {
    // using two pointers technique
    // check if a string is a palindrome or not
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++, right--;
    }

    return true;
}

console.log(isPalindrome(s));

