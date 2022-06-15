var _ = require('underscore');

//recursion indirecta
function esPrimo(n){
    if(n<=0){
        return false;
    } else{
        if (checkPrimos(n,1) == 2){
            return true;
        } else {
            return false;
        }
    }
}

//recursion directa
function checkPrimos(numero, index){
    if (index <= numero){
        if (numero % index === 0){
            return 1 + checkPrimos(numero, index+1 )
        } else {
            return 0 + checkPrimos(numero, index+1 )
        }
    } else {
        return 0;
    }
}

console.log(_.map([7, 9, 11, 15], function(a) { return esPrimo(a) }))

console.log(_.size([7, 9, 11, 15]))

