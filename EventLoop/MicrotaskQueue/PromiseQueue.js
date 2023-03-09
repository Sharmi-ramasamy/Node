Promise.resolve().then(()=> {console.log("I'm Promise.resolve()")});
process.nextTick(()=> {console.log("I'm process.nextTick()")})

// All callbacks in nexttick queue are executed before callbacks in promise queue