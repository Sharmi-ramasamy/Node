const http = require("node:http");
const fs = require("node:fs")

const serverr = http.createServer((request, response) => {
    const name = "Aspire";
    response.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync("./HttpHtml.html", "utf-8");
    html = html.replace("{{name}}", name)
    response.end(html);
})
serverr.listen(4044, () => {
    console.log('server running on port 4044')
})