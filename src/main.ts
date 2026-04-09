// let name: string = 'sathish';

// name = 'john'; // this is valid
// // name = 123; // this will cause a type error

// console.log(name);

// let age: (number | string) = 35;
// // let isStudent: boolean = true;

// age = 'thirty five'; // this is valid

// console.log(age);

// let marks: number[] = [70, 80, 90, 100];
// let marks: Array<number> = [70, 80, 90, 100];

// mixed data type array
// let person: (number | string | boolean)[] = ["sathish", 35, true];

// console.log(person);

// Type Inference
// let student = {
//     name: "sathish",
//     age: 35,
// };

// // student.name = 47;

// console.log(student);


// let person: [string, number] = ["sathish", 35];
// let person: [(string | number), number] = [47, 35]; // this is valid because the first element can be either string or number
// let person: [string, number] = ["sathish", 35];

// console.log(person);

// person.push(56);

// person[0] = "John";

// console.log(person);

// enum Day {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday
// }

// console.log(Day.Wednesday);


// let string1 = 'sathish';
// let string2 = "sathish";
// let string3 = `sathish`; // template literals
// // let string4 = new String('sathish'); // String object

// console.log(string1);
// console.log(string2);
// console.log(string3);
// console.log(string4);

// tuples -> fixed length array with different data types
// let person: [string, number] = ["sathish", 35];

// // in tuple, we can have different data types in the same array, but we need to specify the type of each element in the tuple.

// person.push(47); // this is valid and because of the type inference, the type of the first element is string and the type of the second element is number, so we can push a number to the tuple.

// // we should only add elements to the tuple that match the specified types, otherwise we will get a type error. 

// console.log(person);

// // iterate the array to print its type and value at each index
// person.forEach((value, index) => {
//     console.log(`Index: ${index}, Value: ${value}, Type: ${typeof value}`);
// });

/*
    enum is a special data type that allows us to define a set of named constants. 
*/
// enum Day {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday
// }

// enum Bool {
//     False = 0,
//     True = 1
// }

// console.log(Day.Thursday); 

// console.log(Bool.False);

// optional properties in object types
// let person: {
//     name: string,
//     age?: number, // optional property
// } = {
//     name: "sathish"
// }

// console.log(person);

// readonly properties in object types

// let person: {
//     readonly name: string,
//     age: number,
// } = {
//     name: "sathish",
//     age: 35,
// }

// // reassignment of a readonly property is not allowed
// person.name = "john"; // this will cause a type error because name is a readonly property

// console.log(person);

/*
    enum constants -> used to create a type that can only have a set of predefined values.
*/

// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }

// let color: Color = Color.Red;

// console.log(color);

/*
    class -> a blueprint for creating objects with predefined properties and methods.
*/

// class Color {
//     color: string;

//     constructor(color: string) {
//         this.color = color;
//     }
// }

// let red: Color = new Color('RED');
// let green: Color = new Color('GREEN');
// let blue: Color = new Color('BLUE');

// console.log(red, green, blue);

// class Student {
//     name: string;
//     age: number;
//     course: string;

//     constructor(name: string, age: number, course: string) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }
// }

// let student101: Student = new Student('sathish', 35, 'FSD');

// console.log(student101);

interface Student {
    name: string;
    age: number;
    course: string;
}

// using function prototyping
function Student(this: Student , name: string, age: number, course: string) {
    this.name = name;
    this.age = age;
    this.course = course;
}

let student101: Student = new (Student as any)('sathish', 35, 'FSD');

console.log(student101);