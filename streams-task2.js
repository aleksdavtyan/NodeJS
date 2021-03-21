const fs = require('fs');

const readable = fs.createReadStream('homework4Eng.txt', {
    encoding: 'utf-8',
    highWaterMark: 1
});
const writeStream = fs.createWriteStream('homework4Arm.txt');

readable.on('data', (chunk) => {
    let armLetter = chunk.toUpperCase() === chunk ? config[chunk.toLowerCase()]?.toUpperCase() : config[chunk];
    writeStream.write(armLetter || chunk);
});

const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(config[chunk] || chunk);
        callback();
    }
});