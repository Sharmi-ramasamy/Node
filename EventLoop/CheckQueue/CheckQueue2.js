const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("I'm readFile 1");
    setImmediate(() => console.log("I'm inner setImmediate inside readFile"))
    process.nextTick(() => {console.log("I'm inner process.nextTick inside readFile")})
    Promise.resolve().then(() => {console.log("I'm inner Promise.resolve inside readFile")})
})

process.nextTick(() => console.log("I'm process.nextTick 1"));
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"));
setTimeout(() => console.log("I'm setTimeout 1"), 0)


// Microtask queues callbacks are executed after I/O callbaacks and before check queue callbacks
// that is callbacks in microtask queue executes between I/o queue and check queue


// I'm process.nextTick 1
// I'm Promise.resolve 1
// I'm setTimeout 1
// I'm readFile 1
// I'm inner process.nextTick inside readFile
// I'm inner Promise.resolve inside readFile
// I'm inner setImmediate inside readFile