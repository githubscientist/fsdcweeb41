let person = {
    "name": "sathish",
    "role": "developer"
}

// console.log(person["name"], person.role);
// iteration using for...in loop
// for (let key in person) {
//     console.log(key, person[key]);
// }

// console.log(Object.keys(person));

// for (let key of Object.keys(person)) {
//     console.log(key, person[key]);
// }

// console.log(Object.values(person));

// Object.values(person).forEach(value => {
//     console.log(value);
// });

// console.log(Object.entries(person));

// Object.entries(person).forEach(entry => {
//     console.log(entry[0], entry[1]);
// })

// for (let index in Object.entries(person)) {
//     console.log(Object.entries(person)[index][0], Object.entries(person)[index][1]);
// }

// for (let entry of Object.entries(person)) {
//     console.log(entry[0], entry[1]);
// }

// for (let index = 0; index < Object.entries(person).length; index++) {
//     console.log(Object.entries(person)[index][0], Object.entries(person)[index][1]);
// }