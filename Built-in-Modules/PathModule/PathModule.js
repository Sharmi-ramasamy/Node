// const path = require("node:path");
// not compulsory to have node as prefix 
const path = require("path");
console.log(__dirname);           // string name full path to the folder where file is located
console.log(__filename);          // string name full path to the file


// 1. Basenam

// basename which returns the lastname of the path

console.log(path.basename(__dirname));
console.log(path.basename(__filename));


// 2.Extname - returns the extension of the path

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

// 3. Parse method - prints in object

console.log(path.parse(__dirname));
console.log(path.parse(__filename));

// 4. format method

console.log(path.format(path.parse(__filename)));

// 5. isAbsolute - returns whether a path is absolute or not

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./Pattern1.js'))

// 6. join - which joins all given path segments together using platform specific separator as delimited and normalizes the resulting path

// /console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))
// console.log(path.join(__dirname, "data.json"))

// 7. Resolve method- which resolves a sequence of path or path segments into an absolute path

console.log(path.resolve("folder1","folder2","index.html"))
// forward slash gives the absolute path, if the forward slash is not present resolve will automatically gives the absolute path
console.log(path.resolve("/folder1","folder2","index.html"))
// here forward slash presents so gives the absolute path
console.log(path.resolve("/folder1","//folder2","index.html"))
// resolve will consider // as root and ignore previous path
console.log(path.resolve("/folder1","//folder2","../index.html"))
// folder2 is rrot comes out and gives index.html alone
console.log(path.resolve(__dirname, "data.json"))
// __dirname have absolute path automatically so adds the data.json into the absolute path