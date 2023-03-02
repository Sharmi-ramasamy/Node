const http = require('http');
const hostname = '127.02.0.1';
const port = 4040

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World. Server is created..!!')
    
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})
