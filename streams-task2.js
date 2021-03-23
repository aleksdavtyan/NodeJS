const fs = require('fs');
const letters = require('./alphabet.json'); // getting Json file content as an Object


const readable = fs.createReadStream('homework4Eng.txt', {
    encoding: 'utf-8',
    highWaterMark: 1
});
const writeStream = fs.createWriteStream('homework4Arm.txt');

readable.on("data", (chunk) => {
    writeStream.write(letters[chunk] || chunk);
});