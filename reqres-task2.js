//2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file դաշտը և այն հավասար է "sunny",
// որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found". (Օգտագործել Get մեթոդը):

const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((request, response) => {

    const reqUrl = new URL(request.url, 'http://localhost:3000');
    console.log(reqUrl);
    if (reqUrl.searchParams.get('file') === 'sunny') {
        fs.createReadStream('./sunny.txt').pipe(response);
    } else {
        response.writeHead(404);
        response.end("File Not Found");
    }
}).listen(3000);
