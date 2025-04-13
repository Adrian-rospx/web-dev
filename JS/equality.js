//   = - assignment operator
//  == - comparison operator (loose equality, only value)
// === - strict equality operator (checks if the data type is the same)
//  != - inequality operator
// !== - strict inquality operator

const PI = 3.14;

console.log(PI, typeof PI);

if(PI == "3.14") {
    console.log("weakly equal to \"3.14\"");
}
if(PI != "3.14") {
    console.log(" not weakly equal to \"3.14\"");
}

if(PI === "3.14") {
    console.log("strongly equal to \"3.14\"");
}
if(PI !== "3.14") {
    console.log("Not strongly equal to \"3.14\"");
}