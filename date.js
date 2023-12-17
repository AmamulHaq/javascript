const prompt = require("prompt-sync")();
let y = parseInt(prompt("Enter year of BS: "));
console.log(y);
let m = parseInt(prompt("Enter month of BS: "));
console.log(m);
let d = parseInt(prompt("Enter day of BS: "));
console.log(d);

if (d > 17) {
  d -= 17;
} else {
  d += 30;
  --m;
  d -= 17;
}
if (m > 8) {
  m -= 8;
} else {
  m += 12;
  --y;
  m -= 8;
}
y -= 56;
console.log(y,m,d);