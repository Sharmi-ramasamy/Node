const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("I'm readFile 1");
})

process.nextTick(() => console.log("I'm process.nextTick 1"));
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"));
setTimeout(() => console.log("I'm setTimeout 1"), 0);
setImmediate(() => console.log("I'm setImmediate 1"));         // used for check Queue

// for (let i = 0; i < 200000000; i++){}


// microtask queue - nextTick, Promise
// Timer queue
// check queue
// I/O queue


// I/O events are polled and callback functions are added to the I/O queue only after the I/O is completed.