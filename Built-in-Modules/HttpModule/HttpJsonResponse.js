const http = require("node:http")

const server = http.createServer((request, response) => {
    const ofc = {
    firstName: "Aspire",
    lastName: "Systems"
    }
    response.writeHead(200, {"Content-Type": "application/json"});

    // response.end(ofc)
    //The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. 
    // Received an instance of Object
    // so it is converted into Json array of objects
    
    response.end(JSON.stringify(ofc))
    
})
server.listen(3032, () => {
    console.log('server running on port 3032')
})