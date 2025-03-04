const {odd,even} = require('./var');

function checOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checOddOrEven;