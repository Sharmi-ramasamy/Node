var os = require('node:os');

console.log("Architecture: " + os.arch());
// console.log("OS's Constants: " + os.constants);
// console.log("Info about CPU: " + os.cpus());
console.log("endianness of CPU: " + os.endianness());
// console.log("End-of-Line marker for OS: " + os.EOL);
console.log("freememory: " + os.freemem());
console.log("hostname: " + os.hostname());
console.log("LoadAverage: " + os.loadavg());
// console.log("Network Interfaces: " + os.networkInterfaces());
console.log("Platform: " + os.platform());
console.log("Release: " + os.release());
console.log("Temporary Files Directory: " + os.tmpdir());
console.log("Total Memory: " + os.totalmem());
console.log("Name of OS: " + os.type());
console.log("uptime of OS in secs " + os.uptime());
// console.log("Current User: " + os.userInfo());