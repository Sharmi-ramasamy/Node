console.log("first")
process.nextTick(()=>{console.log("I'm process.nextTick()")})
// Promise.resolve().then(()=> console.log("I'm Promise.resolve"));
console.log("Second")

// All user written synchronous javascript code takes priority over async code that the run time would like to eventually execute

