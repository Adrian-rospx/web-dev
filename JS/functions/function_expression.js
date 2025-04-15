/**
 *  function declaration = defining the reusable block of code
 * 
 *  function expression = defining the function as variable, or value 
 */

function hello(name) {
    console.log(`Hello, ${name}`);
}
hello("Jack");

// alternative: 
const greet = function() {
    console.log("Hello!");
}
greet();

// passing functions as arguments:
const numbers = [1,2,3,4,5];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);