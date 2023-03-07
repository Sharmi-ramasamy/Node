const fs = require("node:fs")

const readStream = fs.createReadStream("../FileSystemModule/File.txt",{
    encoding: "utf-8",
    highWaterMark: 4,
})

const writeStream = fs.createWriteStream("./File2.txt")

readStream.on("data", (chunkData) => {
    console.log(chunkData)
    writeStream.write(chunkData)
})