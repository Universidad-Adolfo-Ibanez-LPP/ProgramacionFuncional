var _ = require('underscore');

function sumar(memo, current){
    return memo + current;
}
console.log(_.reduce([1, 2, 3], sumar));

console.log(_.reduce([1, 2, 3, 3], function(memo, num){ return  memo+num; }))


