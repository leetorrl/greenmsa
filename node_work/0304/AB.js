const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", (input)=>{
const [A, B] = input.split(' ').map(Number);
const result = A / B;
console.log(result.toFixed(9));
rl.close();
})