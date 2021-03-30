//Ստեղծել myMap մեթոդ Array-ի համար, որը կաշխատի ինչպես map մեթոդը. [].map(fn)-ը կարողանանք գրել [].myMap(fn) -ի միջոցով:

Array.prototype.myMap = function (fn) {
        const arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i], i, this));
        }
        return arr;
}

console.log([5, 8, 12].myMap(function (value, index, array) {
        return value + 10;
    })
);
console.log([5, 8, 12].map(function (value, index, array) {
        return value + 10;
    })
);