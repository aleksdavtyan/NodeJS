const fs = require('fs');
const {EventEmitter} = require('events');


const readable = fs.createReadStream('Homeworks.txt', {
    encoding: 'utf-8',
});

let content  = readable.on("data", (chunk) => {
    console.log(chunk);
});

const customEvent = new EventEmitter();

customEvent.on('homework', (data) => {
    console.log(data);
})

customEvent.emit('homework', content);



