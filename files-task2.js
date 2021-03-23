// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված
// ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):

const fs = require('fs');
const os = require('os');

const nowDate = new Date();
const month = nowDate.getMonth();
const date = nowDate.getDate();
const minutes = nowDate.getMinutes();
const seconds = nowDate.getSeconds();
const oldName = os.userInfo().username.concat('.txt');

const newName = month.toString().concat('_', date, '_', minutes, '_', seconds, '.txt');
fs.rename(oldName, newName, function (err) {
    if (err) {
        return err.message;
    }
    console.log('Renamed.');
});