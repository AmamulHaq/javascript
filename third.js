const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let age = parseInt(prompt("Enter your age: "));
console.log("Your name is " + name + " and your age is " + age);

let n = parseInt(prompt("Enter the number of subjects: "));
let array = [];
for (let i = 0; i < n; i++) {
    array[i] = parseInt(prompt("Enter marks of subject " + (i + 1) + ": "));
}

for (let i = 0; i < n; i++) {
    console.log("Marks of subject " + (i + 1) + ": " + array[i]);
}
