const fs = require('fs');

let data = "This content is meant to be written to a file";

fs.writeFile('write.txt', data, (err) => {
  if(err){
    console.log(`Error while writing to the file : ${err}`);
  }

  console.log("Data written to file successfully");
})