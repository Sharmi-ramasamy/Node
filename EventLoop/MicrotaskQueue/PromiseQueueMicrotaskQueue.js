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
    // Promise.resolve().then(() => {
    //     console.log("I'm a inner Promise inside another Promise")
    // })
    process.nextTick(() => {
        console.log("I'm a inner nextTick inside Promise then block")
    })
})
Promise.resolve().then(() => {console.log("I'm Promise.resolve3")})