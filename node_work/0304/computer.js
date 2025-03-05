const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", (input)=>{
   const [A, B] = input.split(' ').map(Number);

   const datanum = BigInt(A)**BigInt(B);

   const computernum = (datanum % 10n) === 0n ? 10 : Number(datanum % 10n);

   console.log(computernum);

   rl.close();
})

