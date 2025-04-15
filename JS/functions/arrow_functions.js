/**
 *  Concise way of writing function expressions
 *  good for single use code blocks
 *      (parameters) => {code}
 */

// the following function expression
const hello = function() {
    console.log("Hello");
}

// can be shortened to this:
const greet = () => console.log("Hello");

hello();
greet();

// usable as function arguments
setTimeout(greet, 3000);

// example:
const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map((element) => Math.pow(element, 2));
const even = squares.filter((element) => element%2 === 0);
const sumNums = even.reduce((accumulator, nextvalue) => accumulator + nextvalue, 0);

console.log(squares);
console.log(even);
console.log(sumNums);