// const fs = require('fs');
// const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

// console.log(A + B);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", (input) => {
  const [A, B] = input.split(' ').map(Number);
  console.log(A + B);
  rl.close();
});
