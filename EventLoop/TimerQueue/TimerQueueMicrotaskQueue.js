setTimeout(() => console.log("I'm settimeout 1"), 0);
setTimeout(() => {
    console.log("I'm setTimeout 2")
    process.nextTick(() => {
        console.log("I'm innner nextTick inside setTimeout")
    })
}, 0);
setTimeout(() => console.log("I'm setTimeout 3"), 0);

process.nextTick(()=> console.log("I'm process.nextTick 1"))
process.nextTick(() => {
    console.log("I'm process.nextTick 2")
    process.nextTick(() => {
        console.log("I'm inner nextTick inside another nextTick")
    })
});
process.nextTick(() => console.log("I'm process.nextTick 3"))

Promise.resolve().then(() => console.log("I'm Promise.resolve 1"))
Promise.resolve().then(() => {
    console.log("I'm Promise.resolve 2")
    process.nextTick(() => console.log("I'm inner nextTick inside then Promise.resolve"))
    Promise.resolve().then(() => console.log("I'm promise.resolve 3"))
})
Promise.resolve().then(() => console.log("I'm Promise.resolve 4"))

// Callbacks in microtask queue are executed inbetween the execution of callbacks in timer queue