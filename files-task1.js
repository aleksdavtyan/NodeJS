const os = require('os');
const fs = require('fs');

const filename = os.userInfo().username + '.txt';
const userInfo = JSON.stringify(os.userInfo());

console.log(filename);
console.log(userInfo);

fs.writeFile(filename, userInfo, function (err) {
    if (err) {
        return err.message;
    }
    console.log('Created.');
});
