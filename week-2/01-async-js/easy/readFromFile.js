const fs = require('fs');

fs.readFile('read.txt', 'utf-8', (err, data) => {
  if(err){
    console.log(`Error while reading file : ${err}`);
  }

  console.log("File reading is successful, diplaying contents:")
  console.log(data)
  console.log("End of File reached");
})