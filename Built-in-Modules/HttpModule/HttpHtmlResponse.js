const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h2> HelloWorld </h2>")
})
server.listen(3033, () => {
    console.log('server running on port 3033')
})


// 2nd method

const servers = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./HttpHtml.html").pipe(response)
    
})
servers.listen(4040, () => {
    console.log('server running on port 4040')
})

// 3rd Method

const serverr = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    const html = fs.readFileSync("./HttpHtml.html", "utf-8")
    response.end(html)
})
serverr.listen(4044, () => {
    console.log('server running on port 4044')
})
