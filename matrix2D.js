let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let n = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log('Matrix m:');
for (let i = 0; i < m.length; i++) {
  let row = '';
  for (let j = 0; j < m[i].length; j++) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}

console.log('Matrix n:');
for (let i = 0; i < n.length; i++) {
  let row = '';
  for (let j = 0; j < n[i].length; j++) {
    row += n[i][j] + ' ';
  }
  console.log(row);
}

