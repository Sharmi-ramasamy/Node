const crypto = require("node:crypto");

const MAX_CALLS = 5;

const start =Date.now();
for (let i=0; i < MAX_CALLS; i++) {
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
console.log(`Hash: ${i+ 1} `, Date.now() - start);
});
}


// libuv's thread pool has 4 thread 
// when execute pbkdf2 5 times, first 4 takes same time but the fifth call however wait for a thread to be free