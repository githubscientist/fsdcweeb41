// console.log('start');

// function add(a, b) {
//     return a + b;
// }

// const result = add(5, 6);
// console.log(result);

// console.log('end');

// console.log('start');

// // start an asynchronous function
// // setTimeOut, setInterval
// setTimeout(() => {
//     console.log('inside the timeout function');
// }, 2000);

// console.log('end');

// asynchronous function
// setTimeout(() => {
//     console.log('after 1 second');
// }, 1000);

// setTimeout(() => {
//     console.log('after 2 seconds');
// }, 2000);

// setTimeout(() => {
//     console.log('after 3 seconds');
// }, 3000);

// synchronous
// setTimeout(() => {
//     console.log('after 1 second');

//     setTimeout(() => {
//         // waits for 3 seconds to complete
//         console.log('after 2 seconds');

//         setTimeout(() => {
//             console.log('after 3 seconds');
//         }, 3000);
//     }, 2000);
// }, 1000);

/*
    Promises -> resulting object of an eventually completing or failing asynchronous operation.
*/

// asynchronous function
const promise = new Promise((resolve, reject) => {
    console.log('promise begins');
    setTimeout(() => {
        let random = Math.floor(Math.random() * 10);

        console.log('promise completed', random);

        // success criteria for the promise
        if (random > 5) {
            resolve({ data: random });
        } else {
            reject({ message: 'the value is less than or equal to 5' });
        }
    }, 2000);
});


console.log(promise);

promise
    .then((result) => {
        console.log('promise is resolved:', result);
    })
    .catch((error) => {
        console.log('promise failed:', error.message);
    })