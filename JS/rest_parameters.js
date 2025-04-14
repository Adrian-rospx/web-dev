/**
 * rest parameters (...rest) allow a function to work with a variable
 *                  number of arguments by bundling them into an array 
 */

// simple example:
let letter = ["a", "b", "c"];

console.log(...letter);

// rest parameters is used for parameters
function displayItems(...elements) {
    // combine with the spread operator to display all items separately
    console.log(...elements);
}

let item1 = "crate";
let item2 = "screwdriver";
let item3 = "drill";
let item4 = "hammer";

displayItems(item1, item2, item3, item4);

// average calculator example:
function average(...numbers) {
    result = 0;
    for(var number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

av = average(1, 5, 12, 7, 1, 10);
console.log(av);