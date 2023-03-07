const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()

const readStream = fs.createReadStream("../FileSystemModule/File.txt",{
    encoding: "utf-8",
    highWaterMark: 4,
})

readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

const writeStream = fs.createWriteStream("./File3.txt")

readStream.pipe(writeStream)

// same as stream instead of data pipe is used here
// returns destination stream through chaining
// condition - destination stream has to be readable, duplex or  a transform stream

// in example consists of only writeable stram, it cannot be used for chaining, 
// so that another built-in-module called zlib is used
// zlib allow us to create zipped files
// it has a built-in transform stream