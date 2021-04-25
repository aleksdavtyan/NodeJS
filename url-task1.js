// Գրել ծրագիր, որը կստուգի , եթե req.url  /sunny է, ապա console-ում տպի 'Yes'.
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/sunny') {
        console.log('YES');
    }
    // for (let key in req.headers) {
    //     console.log('headers key:value = ' + key + ':' + req.headers[key]);
    // }
    res.end(req.url);
}).listen(3000);

