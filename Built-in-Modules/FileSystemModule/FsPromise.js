const { read } = require("node:fs")
const fs = require("node:fs/promises")

console.log("first")
// read file using readFile method
fs.readFile("File.txt","utf-8")
.then((data) => {console.log(data)})                   
.catch((error) => {console.log(error)})

//to prove this is asynchronous add few log stmts

console.log("Second")



// Another method using async 
async function readFile() {
    try {
        const data = await fs.readFile("File.txt", "utf-8");
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
readFile()