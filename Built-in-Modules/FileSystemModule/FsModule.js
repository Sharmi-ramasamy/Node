const fs = require("node:fs");

// the fs-file system module internally uses the buffer

// const fileContent = fs.readFileSync("./File.txt")      // the method is synconous way of reading a file.
// console.log(fileContent);                              // buffer with binary data

// const fileContents = fs.readFileSync("./File.txt", "utf-8")       // utf-8 is used to get output in human readable form
// console.log(fileContents)

// readfile() method

console.log("first")
fs.readFile("./File.txt", (error, data)=> {
    if(error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})

console.log("second")
fs.readFile("./File.txt", "utf-8", (error, data)=> {
    if(error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})

 console.log("third")

 // writeFile Method

 fs.writeFileSync("./Greet.txt", "Hello World with Synchronous Method")          // overwrite the file
fs.writeFile("./Greet.txt", " ...Hello World with Asynchronous method", {flag: "a"} , (error) => {      // asynchronous way to wirteFile
    if(error) {
        console.log(error)
    }
    else {
        console.log("File Written Successfully")
    }
})    


// append the file - flag {} is used 