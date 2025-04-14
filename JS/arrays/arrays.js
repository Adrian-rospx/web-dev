// array - data structure (works similarly to lists in Python)

let fruits = ["apple", "raspberry", "plum"];

console.log(fruits);

fruits[2] = "coconut";
fruits.push("blackberry");  // appends
fruits.pop();
fruits.unshift("mango");    // adds to beginning
fruits.shift();             // removes from beginning

console.log(fruits);

let fruitNum = fruits.length;

console.log(fruitNum);

// sort alphabetically:
fruits.sort();

// iterating through
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// for-of loop:
for(let fruit of fruits){
    console.log(fruit);
}