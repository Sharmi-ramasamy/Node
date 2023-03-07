// const fs = require("node:fs");

// fs.writeFileSync("./Greet.txt", "Hello World with Synchronous Method")        // synchronous way to wirteFile

// fs.writeFile("./Greet.txt", "hello World with Asynchronous method", (error) => {      // asynchronous way to wirteFile
//     if(error) {
//         console.log(error)
//     }
//     else {
//         console.log("File Written Successfully")
//     }
// })                                                               // the async over writes sync in 

// to append use object {}
const fs = require("node:fs");
fs.writeFileSync("./Greet.txt", "Hello World with Synchronous Method")
fs.writeFile("./Greet.txt", " ...Hello World with Asynchronous method", {flag: "a"} , (error) => {      // asynchronous way to wirteFile
    if(error) {
        console.log(error)
    }
    else {
        console.log("File Written Successfully")
    }
})      