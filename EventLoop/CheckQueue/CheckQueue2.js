setImmediate(() => console.log("I'm setImmediate 1"));
setImmediate(() => {
    console.log("I'm setImmediate 2");
    process.nextTick(() => console.log("I'm process.nextTick 1"))
    Promise.resolve().then(() => console.log("I'm Promise.resolve 1"))
})
setImmediate(() => console.log("I'm setImmediate 3"))


// Microtask queue callbacks are executed in between check queue callback 