/**
 *  callback = a function that is passed as 
 *             a parameter to another function
 *             
 *  used to handle asynchronous operations:
 *      reading files;
 *      network requests;
 *      interacting with databases;
 */

sum(display, 5, 12);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function display(number) {
    console.log(number);
}