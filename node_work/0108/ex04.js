const person = {
    age: 20,
    name: "홍길동",
    gender: "남자"
}

// function fuc({age,name,gender}) {
//   console.log(`나이는 ${age}`)
//   console.log(`이름은 ${name}`)
//   console.log(`성별은 ${gender}`)
// }

//변수 호이스팅 문법 -> 다만 함수형 변수를 사용시 신경쓸 필요는 없다

const fuc = ({age,name,gender}) => {

    console.log(`나이는 ${age}`)
  console.log(`이름은 ${name}`)
  console.log(`성별은 ${gender}`)

}

fuc(person)

const a = 10;

console.log(a)