// I/O queue uses built-in-module
// here fs module is used 

const fs = require("node:fs")

fs.readFile(__filename, () => {
    console.log("I'm readFile 1")
})

process.nextTick(() => console.log("I'm process.nextTick 1"))
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"))

// Callbacks in microtask queues are executed before the callbacks in I/O queue


// I'm process.nextTick 1
// I'm Promise.resolve 1
// I'm readFile 1