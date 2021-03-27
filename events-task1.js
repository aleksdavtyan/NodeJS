const fs = require('fs');
const {EventEmitter} = require('events');


const readable = fs.createReadStream('Homeworks.txt', {
    encoding: 'utf-8',
});

const customEvent = new EventEmitter();

customEvent.on('homework', () => {
    console.log('homework event fired!')
    readable.on("data", (chunk) => {
        console.log(chunk);
    });
})

customEvent.emit('homework');



