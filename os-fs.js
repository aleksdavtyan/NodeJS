// const http = require('http');
const os = require('os');
const fs = require('fs');
// const server = http.createServer(function (req, res) {
//
// });
// // 1 ,2
// console.log(os.totalmem());
// console.log(os.networkInterfaces());

// 3.
// const filename = (Math.floor(Math.random() * 100000001)).toString();
// const cpuCount = os.cpus().length.toString();
// fs.appendFile(filename, `The number of CPUs = ${cpuCount}`, function (err) {
//     if (err) throw err;
//     console.log('Created!');
// });

// 4.
// fs.readFile('input', function (err, data) {
//     if (err) {
//         return err.message;
//     }
//     const dashedContent = data.toString().replace(/ /g,'-');
//     console.log(dashedContent);
//     fs.writeFile('write.txt', dashedContent, function (err) {
//         if (err) throw err;
//         console.log('Wrote!');
//     });
// });

// 5.
const osName = os.type();
const currentDate = new Date();
const currentTime = currentDate.getHours() + '_' + currentDate.getMinutes() + '_' + currentDate.getSeconds();
const fName = osName.concat('_', currentTime);
const hw1 = fs.readFileSync('C:\\Users\\Surfer\\Desktop\\WebStormProjects\\nodejs\\hw1.js', "utf-8");
console.log(hw1);
const hw2 = fs.readFileSync('C:\\Users\\Surfer\\Desktop\\WebStormProjects\\nodejs\\hw2.js', "utf-8");
const allContent = hw1 + hw2;
fs.writeFile(fName, allContent, function (err) {
    if (err) throw err;
    console.log('Wrote!');
});

