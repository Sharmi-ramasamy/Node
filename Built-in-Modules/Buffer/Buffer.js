// no need to import buffer because the nodejs allows the buffer to use globally
const buffer = new Buffer.from("Aspire");   // accepts the string , UTF-8 character encoding - optional
buffer.write("innovations"); 
buffer.write("sys")

console.log("buffer String:" + buffer.toString());   // returns the string
console.log(buffer)                // raw binary data that is displayed as output
console.log(buffer.toJSON());     // unicode in the character code ie, "".charCodeAt()
console.log(buffer.toString("hex"))
console.log(buffer.toString("base64"))

