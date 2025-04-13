// String methods in Javascript

let username = "adrianRosu";
let output;

output = username.charAt(2);        // returns char at index
output = username.indexOf("an");    // first index
output = username.lastIndexOf("r"); // last index
output = username.length;           // returns the length
output = username.trim();           // removes extra whitespace

output = username.toUpperCase();
output = username.toLowerCase();
output = username.repeat(3);        // duplicates

console.log(username);
console.log(output);

if(username.startsWith("a")) {
    console.log("starts with a");
}
if(username.endsWith("u")) {
    console.log("end with u");
}

let phoneNum = "012-345-6789";
// remove character instances
output = phoneNum.replaceAll("-", "");
output = phoneNum.padStart(15, "-");// add padding to fit
console.log(output);

// slicing:
let firstName = username.slice(0, 6);
let lastName = username.slice(6);   // automatically goes to end
console.log(firstName);
console.log(lastName);

// these methods may be chained:
username = "  dArWiN DoNaLd  ";
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);