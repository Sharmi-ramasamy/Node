const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("I'm readFile 1")
})

process.nextTick(() => console.log("I'm process.nextTick 1"));
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"));
setTimeout(() => console.log("I'm settimeout 1"), 0);

for (let i = 0; i < 200000000; i++){}


// I/O queue callbacks are executed after Microtask queue callback and timer queue callback

// I'm process.nextTick 1
// I'm Promise.resolve 1
// I'm settimeout 1
// I'm readFile 1