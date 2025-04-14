// .filter() = creates a new array by filtering elements

let numbers = [1,2,3,4,5,6,7,8];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
    return element%2 === 0;
}
function isOdd(element) {
    return element%2 === 1;
}