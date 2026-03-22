let numbers: [string, string, number];

numbers = ["apple", "orange", 56];

numbers.push("cherry");

// numbers.push("cherry"); // this is not recommended because it is violating the tuple behaviour

numbers.forEach(number => console.log(number));