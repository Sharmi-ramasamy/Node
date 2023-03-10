setTimeout(() => console.log("I'm setTimeout 1"), 0);
setTimeout(() => console.log("I'm settimeout 2"), 0);
setTimeout(() => console.log("I'm setTimoeout 3"), 0)


process.nextTick(() => {console.log("I'm process.nextTick1")})
process.nextTick(() => {
    console.log("I'm process.nextTick2")
    process.nextTick(() => {
        console.log("I'm a inner nextTick inside NextTick")
    })
})
process.nextTick(() => {console.log("i'm process.nexttick 3")})

Promise.resolve().then(()=> {console.log("I'm Promise.resolve1")});
Promise.resolve().then(() => {
    console.log("I'm Promise.resolve2")
    process.nextTick(() => {
        console.log("I'm a inner nextTick inside Promise then block")
    })
})
Promise.resolve().then(() => {console.log("I'm Promise.resolve3")})



// callbacks in the microtask queue are executed before callbacks in the timer queue
// order - nexttick queue , Promise queue, Timer queue


// OUTPUT

// I'm process.nextTick1
// I'm process.nextTick2
// i'm process.nexttick 3
// I'm a inner nextTick inside NextTick
// I'm Promise.resolve1
// I'm Promise.resolve2
// I'm Promise.resolve3
// I'm a inner nextTick inside Promise then block
// I'm setTimeout 1
// I'm settimeout 2
// I'm setTimoeout 3