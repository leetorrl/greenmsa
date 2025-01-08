console.log('dd')

const f1 = undefined;

const result1 = f1 && "result1";
const result = f1 || "result";

console.log(result1)
console.log(result)



class A{
    a;
    constructor(a){
        this.a = a;
    }
}


const f5 = NaN

//truthy 값
const t1 = "result"
const t2 = 123
const t3 = []
const t4 = {a:10, b:20}
const t5 = () => {
    function a(){console.log('함수')}
}
const t6 = new A(20);

const result2 = f5 || "result2222"
console.log(result2)

function printName(test){
    if(test){
        console.log(`${test} 출력된다`)
    }
    else{
        console.log(`${test} 출력안된다`)
    }
}

printName(f5)
printName(t5)

function aa (a) {
    if(a){
        console.log(a);
    }
}

aa({ a: 10, b: 20 });