const arr1 = [10,3,5]

// const sortArr1 = arr1.sort((a,b)=>{

//     if(a>b)
//         return -1;
//     else if(a<b)
//         return 1;
//     else
//     return 0;

// })

const sortArr1 = arr1.sort((a,b)=>{

//    return a-b; 내림차순
   return b-a;

})

console.log(sortArr1)

const arr2 = [
    {name: "김길동", age:15},
    {name: "이길동", age:30},
    {name: "홍길동", age:20}
]

const sortArr2 = arr2.sort((item1, item2) => {
    return item1.age - item2.age;
})

console.log(sortArr2)


const arr3 = ["010", "1234", "5678"]

console.log(arr3.join("-"))