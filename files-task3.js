const fs = require('fs');


fs.open('./homework3.txt', 'r+', (err, openedFile) => {
    const buffer = Buffer.alloc(65536);
    fs.read(openedFile, buffer, 0, buffer.length, 0, (err, bytesRead) => {


        console.log(bytesRead);
        console.log(buffer.slice(0, bytesRead.toString()));
    });
    fs.write(openedFile, buffer, buffer.slice(0, bytesRead), 0, buffer.slice(0, bytesRead).length, (err, bytesRead) => {

    });
});


// class RemoveSpecialChars extends Transform {
//     _transform(chunk, encoding, callback) {
//         this.push(chunk.toString().replace(regExp, ''));
//         callback();
//     }
// }
// const transform = new RemoveSpecialChars();
// const readStream = fs.createReadStream('./homeworkr5.txt');
// const writeStream = fs.createWriteStream('./homeworkw5.txt');
//
// readStream.pipe(transform).pipe(writeStream);
