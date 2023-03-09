// Hypertext Transfer Protocol

// A protocol that defines a format for clients and servers to speak to each other
// client sends an HTTP Request
// server response with an HTTP Response

const http = require("node:http")

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});          // request listener
    response.end("HelloWorld")
})
server.listen(3030, () => {
    console.log('server running on port 3030')
})