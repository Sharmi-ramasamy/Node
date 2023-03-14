const cluster = require("node:cluster")
const http = require("node:http")
const os = require("node:os")

console.log(os.cpus().length)

if(cluster.isMaster) {
    console.log(`Master Process is running ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
}
else {
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((request,response) => {
        if (request.url === "/") {
            response.writeHead(200, {"Content-Type": "text/Plain"});
            response.end("Homepage")
        } else if (request.url === "/slowpage") {
            for (let i = 0; i < 600000000; i++)
            response.writeHead(200, {"Content-Type" : "text/Plain"});
            response.end("SlowPage")  
        }
    });
    server.listen(8080, () => console.log("Server running at 8080 port"))
}

