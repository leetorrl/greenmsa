const aa = {
    a:"a변수입니다.",
    b:"bbbb는 20입니다",
    c:"c변수입니다."
}

const {a,b,c} = aa;

console.log(`a = ${a}`)
console.log(`a = ${b}`)
console.log(`a = ${c}`)
console.log(aa)

//문자열로 만드는 함수 JSON.stringify();
//문자열을 다시 객체로 만드는 함수 JSON.parse();

const aaa = JSON.stringify(aa)
console.log(JSON.parse(aaa))