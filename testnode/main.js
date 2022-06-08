var _ = require('underscore');

//FUncion de orden superior
function mayorQue(n) {
    return m => m > n;
}
let mayorQue10 = mayorQue(10);
let mayorQue5 = mayorQue(5);

console.log(mayorQue10(19));
console.log(mayorQue5(3));