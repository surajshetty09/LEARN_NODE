function person(name, callbackfn){
    console.log(`Hello ${name}`)
    callbackfn()
}

console.log("Karnataka")

function address(){
    console.log("India")
}

person('Suraj',address)