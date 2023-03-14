const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("I'm from readableStream close event callback")
})
setImmediate(() => console.log("I'm setImmediate 1"));
setTimeout(() => console.log("I'm setTimeout 1"));
Promise.resolve().then(() => console.log("I'm Promise.resolve 1"));
process.nextTick(() => console.log("I'm process.nextTick 1"))


// Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop 


// I'm process.nextTick 1
// I'm Promise.resolve 1
// I'm setTimeout 1
// I'm setImmediate 1
// I'm from readableStream close event callback