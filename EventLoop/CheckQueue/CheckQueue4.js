setTimeout(() => console.log("I'm setTimeout 1"), 0);
setImmediate(() => console.log("I'm setImmediate 1"));

// When running setTimeout with 0ms delay and along with setImmediate method, 
// the order of execution can never be guaranteed.