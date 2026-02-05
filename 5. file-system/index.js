const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}

const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath, 'Hello from node.js');
console.log('file created successfully');

const readContentFromFile = fs.readFileSync(filePath,'utf-8');
console.log('File Content: ',readContentFromFile);

fs.appendFileSync(filePath, '\nThis is a new line added to the file');
console.log('New content added to the file');

const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello, Async node js',(err)=>{
  if(err) throw err;
    console.log('Async file is created successfully');

    fs.readFile(asyncFilePath, 'utf8',(err,data)=>{
        if(err) throw err;
        console.log("Async file content:",data);
    });
});