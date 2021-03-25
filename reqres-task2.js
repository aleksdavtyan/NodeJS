//2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file դաշտը և այն հավասար է "sunny",
// որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found". (Օգտագործել Get մեթոդը):

const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((request, response) => {

    const urlData = url.parse(request.url, true);
    const queryParams = urlData.query;

    if (queryParams.file === 'sunny') {
        fs.createReadStream('./sunny.txt', {highWaterMark: 1}).pipe(response);
    } else {
        response.statusCode = 404;
        console.log("File Not Found");
    }
}).listen(3000);
