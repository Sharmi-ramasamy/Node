console.log("first");

setImmediate(() => {
  console.log("I'm setImmediate");
});

setTimeout(() => {
  console.log("I'm setTimeout");
}, 0);

process.nextTick(() => {
  console.log("I'm nextTick");
});
console.log("last")


// output 

// first
// last
// I'm nextTick
// I'm setImmediate
// I'm setTimeout