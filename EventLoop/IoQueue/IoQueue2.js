const fs = require("node:fs");

setTimeout(() => console.log("I'm setTimeout 1"), 0);

fs.readFile(__filename, () => {
    console.log("I'm readFile 1")
})

// When running setTimeout with delay of 0ms along with I/O async method, 
// the order of execution can never be guaranteed