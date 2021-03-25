const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    //console.log(req.url);


    const urlObj = url.parse(req.url, true);
    console.log(urlObj);
    if (urlObj.href === '/sunny') {
        console.log('YES');
    }

    // for (let key in req.headers) {
    //     console.log('headers key:value = ' + key + ':' + req.headers[key]);
    // }
    res.end(req.url);
}).listen(3000);

