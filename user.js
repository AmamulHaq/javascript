const prompt = require("prompt-sync")();


let name = prompt("Enter your full name: ");
console.log("your name is " + name);

let no = parseInt(prompt("Enter your no: "));
console.log("your number is " + no);

let Letter = prompt("Enter any Alphabet: ")[0];
console.log("your alphabet is " + Letter);

// enter void input

let inputs = prompt("Enter your input ");
console.log("your inputs are " + inputs);
// allocate the address
for (let i = 0; i < inputs.length; i++)
  console.log("your data in " + i + " is " + inputs[i]);


// array input
let no = parseInt(prompt("Enter no of elements: "));
let array = [];
console.log("Enter your array elements..");
for (let n = 0; n < no; n++) {
  array[n] = prompt();
}

console.log("your array elements are " + array);
console.log("your 2nd element in array is " + array[1]);
for (let n = 0; n < no; n++) {
  console.log("your element in " + n + " is " + array[n]);
}
