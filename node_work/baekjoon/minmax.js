const readline = require('readline');
const res = readline.createInterface({
     input: process.stdin, 
     output: process.stdout 
    }); 

res.question("값을 입력 : ", (input) => { 
    const numbers = input.split(' ').map(Number);
    const min = Math.min(...numbers); 
    const max = Math.max(...numbers); 
    console.log(min, max); 
    res.close(); 
}); 