const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h2> HelloWorld </h2>")
})
server.listen(3033, () => {
    console.log('server running on port 3033')
})


// 3rd method  - using streams

const servers = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/HttpHtml.html").pipe(response)
    
})
servers.listen(4040, () => {
    console.log('server running on port 4040')
})

// 2nd Method

const serverr = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    const html = fs.readFileSync("./HttpHtml.html", "utf-8")
    response.end(html)
})
serverr.listen(4044, () => {
    console.log('server running on port 4044')
})
