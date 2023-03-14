const http = require("node:http");

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