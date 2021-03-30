//Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "first_name", "last_name", "email", "age" դաշտեր պարունակող օբյեկտներից։
// Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը, վերադարձնել users.json-ից զանգված միայն այն օբյեկներից,
// որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const url = require('url');
const fs = require('fs');
const userDB = require('./user.json'); // getting Json file content as an Object

//console.log(userDB);
// localhost:3000/filter?=Alex

const server = http.createServer((request, response) => {

    const reqURL = new URL(request.url, 'http://localhost:3000/');
    const filter = reqURL.searchParams.get('filter');

    if (filter) {
        response.end(JSON.stringify(userDB.filter(user => {
            return user['first_name'].includes(filter) || user['last_name'].includes(filter);
        })));
    } else {
        response.writeHead(404);
        response.end('User Not Found.')
    }
});

server.listen(3000);