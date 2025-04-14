// Spread operator (...) in Javascript allows iterables 
//                       to be expanded into separate elements

let numbers = [1,2,3,4,5,6,-13,15,-8];

let max = Math.max(numbers);    // returns a NaN as it's incorrect
let min = Math.min(...numbers);

console.log(max);
console.log(min);

let username = "I am the best";
let letters = [...username];

console.log(username);
console.log(letters);