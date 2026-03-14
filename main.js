// let, const keywords

// let temp = 23.45; // initializations

// re-assignment
// const -> does not support reassignment
// temp = 35.23;
// let & var -> supports reassignment
// temp = 35.23;

// re-declarations
// var -> supports re-declaration
// var temp = 'apple';

// let & const -> doesn't allow re-declaration
// temp = 34.56;



// main block
// var temp = 23.34; // function scoped
// let temp;

// // inner block
// {
//     var temp = 35;

//     // block 1
//     console.log(temp); // temp refers to the main block
// }

// // refers to the main block
// console.log(temp); // temp refers to the main block


// for (let i = 1; i <= 10; i++); // block 1
// console.log(i); // main

// for (var i = 1; i <= 10; i++); // block 1
// console.log(i); // main

// function hello() {
//     var x = 10;
//     console.log(x);
// }

// hello();

// console.log(x);

// named functions
// function sum(x, y) {
//     console.log(x + y);
// }

// sum(5, 6);

// sum -> variable or a reference
// it is storing a function type of value
// nameless function or function expression
// let sum = function (x, y) {
//     console.log(x + y);
// }

// sum(5, 6);

// arrow function -> ES6
// let sum = (x, y) => {
//     console.log(x + y);
// }

// sum(5, 6);

// one liner function possible in arrow function
// nameless function or function expression or arrow function
// let sum = (x, y) => console.log(x + y);

// sum(5, 6);

// IIFE (Immediately Invoked Function Expression)
// ((x, y) => console.log(x + y))(5, 6);

// IIFE
// (function (x, y) {
//     console.log(x + y)
// })(5, 6);

// hoisting: var -> hoisted to the top of the function or global scope
// It is a process where a variable or function declaration is moved to the top of its scope before code execution
/*
    - let, var, const -> variable declarations are hoisted to the top of their scope but not initialized.
    - let and const -> are hoisted but not initialized, accessing them before declaration results in a ReferenceError (Temporal Dead Zone).
    - Temporal Dead Zone (TDZ) -> the time between the start of the block and the point where the variable is declared, during which accessing the variable will throw a ReferenceError.
*/
// console.log(x);

// var x;

// sum(5, 6);

// var sum = (x, y) => {
//     console.log(x + y);
// }

// sum(5, 6);

// // this function will be hoisted to the top of the code
// function sum(x, y) {
//     console.log(x + y);
// }

// let numbers = [4, 3, 2, 1, 5];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// index = 0
// index increases by 1 every execution
// index will stop after reaching the last index
// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// for (let value of numbers) {
//     console.log(value);
// }

// let word = 'apple';

// // for (let index = 0; index < word.length; index++) {
// //     console.log(word[index]);
// // }


// // for (let index in word) {
// //     console.log(word[index]);
// // }

// for (let char of word) {
//     console.log(char);
// }

// let person = {
//     name: 'krish',
//     designation: 'developer',
//     salary: '12000000'
// }

// for (let key in person) {
//     console.log(key, ':', person[key]);
// }

// let nums1 = [3, 4, 5, 6];

// // console.log(...numbers); // spread operator

// // console.log(3, 4, 5, 6);

// let nums2 = [1, 2, ...nums1];

// console.log(nums2);

// rest ... 
// rest of all the arguments
// function sum(...z) {
//     console.log(z);
// }

// sum(5, 6, 7, 8,);

// destructuring: it is a way to extract values from arrays or objects and assign them to variables in a more concise way.

// let person = ['krish', 'developer', 'coimbatore'];

// // let name = person[0];
// // let designation = person[1];
// // let location = person[2];
// let [, , location] = person;

// console.log(location);

// let person = {
//     name: 'krish',
//     designation: 'developer',
//     location: 'coimbatore'
// }

// // without destructuring
// // let name = person.name;
// // let designation = person.designation;
// // let location = person.location;

// // destructuring syntax
// // let { name, designation: job, location } = person;

// // console.log(name, job, location);

// let { location, designation, name } = person;

// console.log(name, designation, location);

// let person = {
//     name: 'krish',
//     designation: 'developer',
//     location: 'coimbatore'
// }
// let numbers = [3, 4, 5];

// console.log({ ...person });

// console.log(...numbers);
// console.log(3, 4, 5);

// let person2 = {
//     ...person,
//     salary: 1200000
// }

// console.log(person2);

// function details({ name, location }) {
//     console.log(name, location);
// }

// details(person);

// ... rest operator
// let { name, ...details } = person;

// console.log(name, details);

// let email = 'sathish@guvi.in';

// let loggedInfo = email + ' ' + 'is logged in!';
/*
    template literal: It means to embed expressions inside string literals, allowing for easier string interpolation and multi-line strings. It is denoted by backticks (`) instead of single or double quotes.
*/
// let loggedInfo = `${email} is logged in!`;

// console.log(loggedInfo);

// default parameter
// function greet(email = 'guest') {
//     let loggedInfo = `${email} is logged in!`;
//     console.log(loggedInfo);
// }

// let email = 'sathish@guvi.in';

// if (email) {
//     greet(email);
// } else {
//     greet();
// }

// short hand property or advanced object literal
// when the property name and variable name are the same, we can use the shorthand syntax to create an object literal. Instead of writing name: name, we can simply write name.
// let name = 'krish';
// let location = 'coimbatore';

// let person = {
//     name,
//     location
// }

// console.log(person);
// import { number, sum } from './refs.js';

// sum(5, 6);

