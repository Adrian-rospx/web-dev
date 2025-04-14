/**
 *  forEach() - Method used to iterate over the elements 
 *              of an array and apply a specified function (callback)
 *              for each element
 *      ex:
 *  array.forEach(callback);
 *  element, index, array are provided
 */

let numbers = [1,2,3,4,5,6,7,8];

console.log(...numbers);

numbers.forEach(double);
numbers.forEach(display);

// the element, index and array have to be in order!
function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}