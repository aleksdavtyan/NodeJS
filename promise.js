// 1.
const random = require('random');
const http = require('http');
const fs = require('fs');
// const promise = new Promise(function (resolve, reject) {
//     const randomNum = random.int(0, 10);
//     console.log(randomNum);
//     if (randomNum < 5) {
//         reject(new Error('the Number is small than 5.'));
//     }else {
//         resolve(randomNum);
//     }
// });

// 2.
fs.readFile('config.json', function (err, param) {
    if (err) {
        return err.message;
    }
    const serverParams = JSON.parse(param.toString());
    const host = serverParams.host;
    const port = serverParams.port;
   const server = http.createServer(function (req, res) {
        res.write('Hello from Server Created!'); //write a response to the client
        res.end(); //end the response
    });
   server.listen(port, host);

});

// 3.
