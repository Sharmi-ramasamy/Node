// Dangers of Mixing Blocking and Non-Blocking Code

const fs = require('fs');

fs.readFile('./Block.js', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
  console.log(data);
  }
});
fs.unlinkSync('./Block.js');    // deletes the file