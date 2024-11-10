const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if(err){
    console.error(`Error while readig from file : ${err}`);
  }

  console.log("Data read successfully , starting the cleaning process");

  let cleanedData = "";

  const lines = data.split('\n')

  for(let i = 0; i < lines.length; i++){
    let line = lines[i];

    let words = [];

    let n = line.length;
    let currWord = "";
    for(let i = 0; i < n; i++){
      if(line.charCodeAt(i) != ' '.charCodeAt(0)){
        currWord += line[i];
      } else {
        // For omitting empty spaces.
        if(currWord.length > 0) words.push(currWord);
        currWord = "";
      }
    }

    if(currWord.length > 0) words.push(currWord);

    cleanedData = cleanedData + words.join(' ') + "\n";
  }

  // Removing last newline 
  cleanedData = cleanedData.slice(0, -1)

  console.log("Data is cleaned, starting writing to the file");

  fs.writeFile(filePath, cleanedData, (err) => {
    if(err){
      console.log(`Error while writing to the file : ${err}`);
    }

    console.log("Data is cleaned and written to the file. Bye");
  })
})