// 1.
const random = require('random');
const http = require('http');
const fs = require('fs');
const fsp = require('fs/promises');
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
// const server = http.createServer(function (req, res) {
//     res.write('Hello from Server Created!'); //write a response to the client
//     res.end(); //end the response
// });
// fs.readFile('./config.json', function (err, param) {
//     if (err) {
//         return err.message;
//     }
//     const serverParams = JSON.parse(param.toString());
//     const host = serverParams.host;
//     const port = serverParams.port;
//     server.listen(port, host);
//
// });

// 3.
async function readWriteParts() {
    const inputData = await fsp.readFile('./input.txt', 'utf-8');
    const firstPart = inputData.slice(0, inputData.lenght / 2);
    const secondPart = inputData.slice(0, inputData.lenght / 2);

    await Promise.all([
        fsp.writeFile('output1.txt', firstPart),
        fsp.writeFile('output2.txt', secondPart)
    ]);
}

readWriteParts().then(function (data) {
    console.log("Read and Created.");
}).catch(function (error) {
    console.log(error);
});