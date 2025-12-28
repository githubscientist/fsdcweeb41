/*
    This file will have statements demonstrating about variables, data types and operators in JavaScript.
*/

// the following line assigns a value 40 to a variable age
// age = 40
// console.log(age);

// --------------------------------------------------

// let age = 40;

// age = 45;

// age = age + 5; // age = 50

// console.log(age);

// --------------------------------------------------

// const age = 40;

// age = 45;

// age = age + 5; // age = 50

// console.log(age);

// --------------------------------------------------

// let age = 25; // declaration

// age = 'twenty five'; // re-declaration will throw an error :let

// console.log(age);

/*
    var -> allows you to re-declare a variable. i.e., re-create it as a new variable

    let -> does not allow you to re-declare a variable


    both the keywords allow us to re-assign a value.

    const -> re-assignment will not work
*/

/*
    Data Types: tells the type of data stored in a variable.

    what are the types in JS we can store in a variable?

    1. Number

    For example: 45, 63, 128, 1024, 32.467, 15.23, 4.68, NaN, etc.

    2. Boolean

    For example: true or false

    3. undefined

    4. String

        - Strings are sequence of characters that are enclosed within single quotes('') or double quotes ("") or backticks (``)

        a character can be either:
            - an alphabet: an uppercase (A, B, C, D, ...) or a lowercase (a, b, c, d, ...)
            - a number
            - a special symbol (&, *, %, $, #, @, !)

    5. Object
        a. array
        b. js object
        c. null
*/

// let age = 25;

// console.log(typeof age);

// let cgpa = 6.78;

// console.log(cgpa, typeof cgpa);

// let waterLevel = 4;
// let hasReachedLimit = false; // case-sensitive

// console.log(hasReachedLimit, typeof hasReachedLimit);

/*
    Statically typed language and Dynamically typed language

    Statically type language -> the data type of a variable is known at compile time. e.g., C, C++, Java, etc...

    boolean isReached;

    Dynamically typed language -> the data type of a variable is known at runtime. e.g., JavaScript, Python, Ruby, etc...

    let isReached;
*/

// let isReached = undefined;

// console.log(isReached, typeof isReached);


// ----------------------------------------------------------

// let alphabet = 'S';

// console.log(typeof alphabet);

// let word = 'apple';

// console.log(word, typeof word);

// let sentence = 'apple is a fruit.'

// console.log(sentence, typeof sentence);

// \n - escape sequence (a new line escape sequence)
// string literals
// let paragraph = `Apple is a fruit and 
// eating an apple a day
// keeps doctor away! we now have 15 apples in the box`;

// console.log(paragraph, typeof paragraph);

// ----------------------------------------------------------

// Object data types -> allow us to store multiple elements or values in a single variable.

// Array -> data structure that allow us to store multiple values

// arrays are heterogenous.i.e., we can store multiple type of values in an array
// let ages = [5, 15, 26, 36, 40];
// let fruits = ['apple', 'banana', 'orange', 'berries', 'watermelon'];

// let person101 = ['krish', 25, 'developer', 1000000, 'India', 4.5, true, ['fishing', 'cooking', 'driving', 'gaming']];

// console.log(ages, typeof ages);

// ---------------------------------------------------------

// let person101 = [
//     'krish',
//     25,
//     'developer',
//     1000000,
//     'India',
//     4.5,
//     true,
//     ['fishing', 'cooking', 'driving', 'gaming']
// ];

// let person101Object = {
//     // key:value pair
//     name: 'krish',
//     age: 25,
//     role: 'developer',
//     salary: 1000000,
//     location: 'India',
//     experience: 4.5,
//     isEligible: true,
//     hobbies: ['fishing', 'cooking', 'driving', 'gaming']
// };

// console.log(person101Object.hobbies)

// ---------------------------------------------------------

// let value = null;

// console.log(value, typeof value);

// ---------------------------------------------------------

// let value = NaN; // not a number

// console.log(value, typeof value);

// let a; // undefined 
// let b = 5; // b = 5

// let c = a + b; // c = a + b; c = undefined + 5; c = NaN (Not A Number)

// console.log(c); // NaN


// -------------------------------------

/*
    Operator - a symbol used to perform an operation on either one or more than one variable or value.

    Two types of operators(based on how many variable or values are used):

    1. Unary

    +5, -6

    2. Binary

    5 + 6

    Types of operators (based on which operation we want to perform):

    1. Arithmetic Operators:

    + addition operator
    - subtraction
    / division
    * multiplication
    ** exponent
    % modulo division
    ++ increment
    -- decrement
*/

// console.log(100 ** 0.5);

// console.log(5 % 6);

// console.log(500 % 632);

// console.log(5 + 6, 5 - 6, 5 * 6, 5 / 6);

// let age = 5;
// age++; // age = age + 1;
// console.log(age);

// let age = 5;
// age--; // age = age - 1;
// console.log(age);

/*
    2. Relational Operators

    relate two variables or values.

    All the following operators yields either true or false as a result.

    < less than
    > greater than
    <= less than or equal to
    >= greater than or equal to
    == double equal to (comparison operator)
    === type comparison
    != not equal to
    !== not double equal to (with type comparison check)
*/
// 5 < 6 or 5 == 6 => true or false => true

// console.log(5 === '5'); 

/*
    Find whether the person is eligible to vote or not.

    Criteria:

    1. The age of the person has to be 18 or more than 18.
    2. The person has to have either one of the following IDs.
        - Aadhar Card
        - Voter ID
*/

let age = 19;
let hasAadharCard = false;
let hasVoterID = false;

// console.log(age >= 18, hasAadharCard == true, hasVoterID == true);


/*
    3. Logical Operators - used to combine multiple expressions

        - && logical AND operator
        - || logical OR operator
        - ! logical NOT operator
*/

// to check if the person has one of the ids
// console.log(hasAadharCard == true && hasVoterID == true); // this tells that the person should have an aadhard card and a voter id -- both

console.log(hasAadharCard == true || hasVoterID == true);