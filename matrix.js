const prompt = require('prompt-sync')();

console.log("\tKNOW CONDITION FOR MATRIX MULTIPLICATION\n");
let a, b, c, d;
let m = [];
let n = [];
let product = [];
let sum = [];

console.log("Enter order of first matrix m:");
a = parseInt(prompt(''));
b = parseInt(prompt(''));

console.log("Enter order of second matrix n:");
c = parseInt(prompt(''));
d = parseInt(prompt(''));

if (b !== c) {
  console.log("\n\nSORRY! As columns in matrix m is not equal to rows in matrix n.\n\n");
  process.exit(1);
}

console.log("\nEnter elements of matrix m:");
for (let i = 1; i <= a; i++) {
  console.log(`Enter elements of row ${i}:`);
  m[i] = [];
  for (let j = 1; j <= b; j++) {
    m[i][j] = parseInt(prompt(''));
  }
}

console.log("\nEnter elements of matrix n:");
for (let j = 1; j <= b; j++) {
  console.log(`Enter elements of row ${j}:`);
  n[j] = [];
  for (let k = 1; k <= d; k++) {
    n[j][k] = parseInt(prompt(''));
  }
}

console.log("\nProduct of the matrices:");
product = [];
for (let i = 1; i <= a; i++) {
  product[i] = [];
  for (let k = 1; k <= d; k++) {
    product[i][k] = 0;
    for (let j = 1; j <= b; j++) {
      product[i][k] += m[i][j] * n[j][k];
    }
    process.stdout.write(product[i][k] + "\t");
  }
  console.log();
}

if (a !== d || b !== c) {
  console.log("\nTheir sum is not possible\n");
  process.exit(1);
}

console.log("\nSum of the matrices:");
sum = [];
for (let i = 1; i <= a; i++) {
  sum[i] = [];
  for (let j = 1; j <= d; j++) {
    sum[i][j] = m[i][j] + n[i][j];
    process.stdout.write(sum[i][j] + "\t");
  }
  console.log();
}
