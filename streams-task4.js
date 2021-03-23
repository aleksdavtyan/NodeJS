const fs = require('fs').promises;

async function firstLetterToUppercase(path) {
    const data = (await fs.readFile(path)).toString();
    await fs.writeFile(path, data.split(/\b/).map(word => word[0].toUpperCase() + word.slice(1)).join(''));
    // data.replace(/^(\w)|\s+(\w)/gi, letter => letter.toUpperCase())
}

firstLetterToUppercase('./input.txt').then(() => {
    console.log('done');
}).catch((err) => {
    console.log(err);
})