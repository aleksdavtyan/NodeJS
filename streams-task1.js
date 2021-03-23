const Stream = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 10,
    encoding: 'utf-8'
});
const regExp = /[^a-zA-Z0-9\s\n]/g;

readStream.on('data', (chunk => {
    console.log(chunk.replace(regExp, ''));
}));