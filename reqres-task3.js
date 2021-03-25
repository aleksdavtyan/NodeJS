//Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "first_name", "last_name", "email", "age" դաշտեր պարունակող օբյեկտներից։
// Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը, վերադարձնել users.json-ից զանգված միայն այն օբյեկներից,
// որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const url = require('url');
const fs = require('fs');
const userDB = require('./user.json'); // getting Json file content as an Object

const userData = [...userDB];
//console.log(userDB);
// localhost:3000/filter?first_name=Alex&last_name=Davtyan

const server = http.createServer((request, response) => {

    const urlObj = url.parse(request.url, true);
    const queryParams = urlObj.query;
    console.log(queryParams);

    if (urlObj.pathname === '/filter') {
        for (let user of userData) {
            if (user.first_name === queryParams.first_name && user.last_name === queryParams.last_name) {
                console.log(user);
            }
        }
    }
});

server.listen(3000);