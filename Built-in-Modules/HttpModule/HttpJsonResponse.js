const http = require("node:http")

const server = http.createServer((request, response) => {
    const ofc = {
    firstName: "Aspire",
    lastName: "Systems"
    }
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(ofc))
})
server.listen(3032, () => {
    console.log('server running on port 3032')
})