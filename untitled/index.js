//Instalar NODE
//nuevo proyecto de node y luego click derecho

var _ = require('underscore');
console.log(_.find(['a', 'b', 3, 'd'], _.isNumber))

//declarando una funcion
function factorial(n){
    if(n===0) return 1;
    else{
        return n * factorial(n-1)
    }
}

console.log(factorial(4));

//declarando una variable

let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5))

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
console.log(esPrimo(37));

//abstrayendo funciones
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//FUncion de orden superior
function mayorQue(n) {
    return m => m > n;
}
let mayorQue10 = mayorQue(10);
console.log(mayorQue10(9));


function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}
ruidosa(Math.min)(3, 2, 1);

//iteracion comun
function sum(numbers) {
    let acc = 0;
    for (let n of numbers) {
        acc += n;
    }
    return acc;
}

console.log(sum( [ 3, 2, 1 ]));

function len(list){
    return list?list.length:0;
}
//devuelve la cabeza
function head(list) {
    return len(list) > 0
        ? list[0]
        : null;
}
//devuelve el resto sin la cabeza
function tail(list) {
    return len(list) > 1
        ? list.splice(1)
        : null;
}

// Entry point.
function sum1(list) {
    return recSum(list, 0);
}
// Recursive call.
function recSum(list, acc) {
    const h = head(list);
    if (!h) return acc;
    return recSum(tail(list), h + acc);
}

// Entry point.
function sum2(list) {
    return recSum2(list);
}
// Recursive call.
function recSum2(list) {
    const h = head(list);
    if (!h) return 0;
    return h + recSum2(tail(list) );
}

console.log(sum2( [ 3, 33, 5 ]));


var nums = [1,2,3,4,5];
function doubleAll(array) {
    return _.map(array, function(n) { return n*2 });
}

console.log(doubleAll(nums));

//=> [2, 4, 6, 8, 10]
function average(array) {
    var sum = _.reduce(array, function(a, b) { return a+b });
    return sum / _.size(array);
}
console.log(average(nums));
//=> 3
/* grab only even numbers in nums */
function onlyEven(array) {
    return _.filter(array, function(n) {
        return (n%2) === 0;
    });
}
console.log(onlyEven(nums));

//funcion de primera clase
const holaMundo = () => {
    console.log("Hola, Mundo"); // Hola, Mundo
};
holaMundo();