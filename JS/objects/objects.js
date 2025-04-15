/**
 *  Objects are collections of related properties and/or methods
 *              Object = {key:value,
 *                        function()}
 */

const person = {
    firstName : "John",
    lastName : "Johnson",
    age : 30, 
    lawful : true,
    greet: (name) => console.log(`Hello, ${name}`)
}

// items are accessed using '.'
console.log(person.lastName);

// can contain functions as methods
person.greet("Mike");