const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("I'm readFile 1");
    setImmediate(() => console.log("I'm inner setImmediate inside readFile"))
})

process.nextTick(() => console.log("I'm process.nextTick 1"));
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"));
setTimeout(() => console.log("I'm setTimeout 1"), 0)

// now check queue (setImmediate) is executed after I/O (readFile)

// check queue callbacks are executed after  
// Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed.