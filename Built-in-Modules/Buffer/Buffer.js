// no need to import buffer because the nodejs allows the buffer to use globally
const buffer = new Buffer.from("Aspire");   // accepts the string , UTF-8 character encoding - default
buffer.write("innovations"); 
buffer.write("sys")

console.log(buffer)                // raw binary data that is displayed as output 
console.log("buffer String:" + buffer.toString());   // returns the string         - readable form
console.log(buffer.toJSON());     // unicode in the character code ie, "".charCodeAt()
console.log(buffer.toString("hex"))
console.log(buffer.toString("base64"))

{/* <Buffer 73 79 73 6f 76 61>
buffer String:sysova
{ type: 'Buffer', data: [ 115, 121, 115, 111, 118, 97 ] }    ascii values [s-115,......]
7379736f7661 
c3lzb3Zh */}


var buf = Buffer.alloc(15, 'a');
console.log(buf);               // encoded form
console.log(buf.toString())     // human readable form
console.log(buf.length)

// output
// <Buffer 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61>
// aaaaaaaaaaaaaaa
// 15- length


// converting a string into buffer - encoding  - utf-8 , utf16le , latin1
//converting a buffer into readable string - decoding

// Node.js also supports the following binary-to-text encodings. 
// For binary-to-text encodings, the naming convention is reversed: 
// Converting a Buffer into a string is typically referred to as encoding, and
// converting a string into a Buffer as decoding.


// iterate over contents of buffer

const buf2 = Buffer.from('Hey!')
for (const item of buf2) {
  console.log(item) //72 101 121 33
}

// Changing the content of buffer

const bufs = Buffer.from('Hello!')
bufs[1] = 97 //a in UTF-8
console.log(bufs.toString()) //Hallo!

// slice buffer

const buffers = Buffer.from('Aspire');
console.log(buffers.subarray(0).toString())      // Aspire
const slice = buffers.subarray(0,3);            
console.log(slice);                             // <Buffer  41 73 70>
console.log(slice.toString())                   // Asp
// replace characters
buffers[1,2] = 83; // S
console.log(buffers.toString());               // ASSire


// copy a buffer



