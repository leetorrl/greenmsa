const readline = require('readline');

console.log("A + B + C = ??")

const rl = readline.createInterface({
  
  input: process.stdin,
  output: process.stdout
})

rl.question("", (input) => {

  const [A, B, C] = input.split(' ').map(Number);
  
  console.log(A+B+C);

  rl.close();

})