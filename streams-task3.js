const fs = require('fs');
const {Transform} = require('stream');

const regExp = /[^a-zA-Z0-9\s\n]/g;

class RemoveSpecialChars extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().replace(regExp, ''));
        callback();
    }
}
const transform = new RemoveSpecialChars();
const readStream = fs.createReadStream('./homeworkr5.txt');
const writeStream = fs.createWriteStream('./homeworkw5.txt');

readStream.pipe(transform).pipe(writeStream);
