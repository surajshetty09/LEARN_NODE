const fs = require('fs')

function person(name, callbackfn){
    console.log(`Hello ${name}`)
    callbackfn()
}

console.log("Karnataka")

function address(){
    console.log("India")
}

person('Suraj',address)

fs.readFile("input.txt",'utf8',(err,data)=>{
    if(err){
        console.error('Error reading file',err);
        return;
    }
    console.log(data);
});