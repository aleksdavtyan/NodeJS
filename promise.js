// 1.
const random = require('random');
const promise = new Promise(function (resolve, reject) {
    const randomNum = random.int(0, 10);
    console.log(randomNum);
    if (randomNum < 5) {
        reject(new Error('the Number is small than 5.'));
    }else {
        resolve(randomNum);
    }
});

// 2.

