


function aa(callback){
    setTimeout(()=>{

        console.log("콜백함수 호출 합니다.")
        callback();

    },3000)
}

aa( () => {
    console.log("aaa")
    bb(()=>{
        console.log("bbb")
        cc(()=>{
            console.log("ccc")
        })
    })
})

function bb(callback){

    setTimeout(()=>{

        console.log("콜백콜백함수 호출")
        callback();

    },4000)

}

function cc(callback){

    setTimeout(()=>{
        console.log("콜백콜백콜백함수 호출")
        callback()
    },4000)
}