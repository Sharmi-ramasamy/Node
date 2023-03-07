// to increase the thread pool size 
// libuv's thread pool size is 4, here we increase the size of this thread pool
// done by setting the process environment variable


const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 6;

const MAX_CALLS = 6;

const start =Date.now();
for (let i=0; i < MAX_CALLS; i++) {
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
console.log(`Hash: ${i+ 1} `, Date.now() - start);
});
}