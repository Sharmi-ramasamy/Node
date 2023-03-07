const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((request, response) => {
//    response.end(request.url);
   if (request.url === "/") {
    response.writeHead(200, {"Content-type": "text-plain"})
    response.end("Homepage")
   }
   else if (request.url === "/about") {
    response.writeHead(200, {"Content-type": "text-plain"})
    response.end("About page")
   }
   else  if (request.url === "/api") {
    response.writeHead(200, {"Content-type": "text-plain"})
    response.end (JSON.stringify ({
        firstName : "Aspire",
        lastName : "Systems"
    }))
   }
   else {
    response.writeHead(404);
    response.end("Page not Found")
   }
})
server.listen(4044, () => {
    console.log('server running on port 4044')
})