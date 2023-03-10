setTimeout(() => console.log("I'm setTimeout 1"), 2000);
setTimeout(() => console.log("I'm setTimeout 2"), 200);
setTimeout(() => console.log("I'm setTimeout 3"), 20);

// Timer queue callbacks are executed in FIFO order- least delay will execute first here 3rd one executes first.


// I'm setTimeout 3
// I'm setTimeout 2
// I'm setTimeout 1