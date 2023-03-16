const fs = require('fs');

fs.readFile('./Block.js', 'utf-8',(readFileErr, data) => {
  if (readFileErr) {console.log(readFileErr)}
  else {
  console.log(data); }
//   fs.unlink('./Block.js', unlinkErr => {
//     if (unlinkErr){
//         console.log(unlinkErr)
//     }
//   });
});
