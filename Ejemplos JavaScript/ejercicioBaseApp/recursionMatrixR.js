var _ = require('underscore');
const fs = require("fs");
// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/matrix.txt", main);

/**
 * Principal callback que se llamara luego de leer el archivo
 * @param error
 * @param data
 */
function main(error, data) {
    if(error) {
        throw error;
    }
    //adquiero el contenido del txt
    let contents = data.toString();
    //obtengo la cantidad de filas
    let filas = contents.split("\n");
    let i = filas.length
    //obtengo la cantidad de columnas
    let j = filas[0].split(" ").length
    //creamos la matriz con ese tamaño, mediante crear un arreglo y llenarlo con subarreglos
    let mat = Array(i).fill(Array(j));
    //convertir la matriz de texto a numero
    mat = _.map(filas, (fila)=>{
        //primero obtengo los numeros en texto
        let numbersTextForm = fila.split(" ");
        let numbers = _.map(numbersTextForm, (number)=>{
            return parseInt(number)
        })
        return numbers;
        }
    )

    //mi arreglo de caminos
    var path =  [];
    // supogamos que empezamos del numero par mas proximo a la izquierda/superior
    //supongamos que queresmo terminar en el primer impar del lado derecho superior
    let endCoordinates = findCoordinate(mat,5);
    let startCoordinates = findCoordinate(mat,7);

    findPaths(mat, path, startCoordinates[0],startCoordinates[1], endCoordinates);
}

/**
 * Retorna dada una matriz las coordenas de un elemento en especifico
 * @param m
 * @param number
 * @returns {(number|number|*)[]}
 */
function findCoordinate(m, number){
    //obtengo la fila completa en donde esta
    let filaX = _.filter(m, (fila)=> {
        let theNumber = _.find(fila, (actual) => {
            return (actual == number);
        });
        return (theNumber == number);
    })
    //luego el numero de fila
    let x = _.findIndex(m, (fila)=> {
        let theNumber = _.find(fila, (actual) => {
            return (actual == number);
        });
        return (theNumber == number);
    })
    //ahora trabajo solo con esa fila
    // para tener el numero de columna
    let y = _.findIndex(filaX[0], (actual) => {
        return (actual == number)
    });
    return [x, y];
}

/**
 * Revisa si hemos llegado al final de donde deberiamos haber llegado
 * @param i
 * @param j
 * @param endCoordinates
 * @returns {boolean}
 */
function reachTheEnd(i, j, endCoordinates) {
    return i == endCoordinates[0] && j == endCoordinates[1];
}

/**
 * Esta funcion encuentra todos los caminos posibles
 * moviendose unicamente para la derecha y/o abajo
 *
 * @param mat matriz con valores
 * @param path camino posible
 * @param i pos de fila
 * @param j pos de columna
 */
function findPaths( mat, path,  i, j, endCoordinates) {
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    // Si llegue al final imprimo el path
    if (reachTheEnd(i,j,endCoordinates)) {
        path.push(mat[i][j]);
        console.log(path);
        path.pop();
        return;
    }
    // meto la pos actual como parte del camino
    path.push(mat[i][j]);

    // muevo un lugar a la derecha
    if (isPossible(i,j+1,mat,path)) {
        findPaths(mat, path, i, j + 1, endCoordinates);
    }
    // muevo un lugar abajo
    if (isPossible(i+1,j,mat,path)) {
        findPaths(mat, path, i + 1, j, endCoordinates);
    }
    // muevo un lugar arriba
    if (isPossible(i-1,j,mat,path)) {
        findPaths(mat, path, i -1, j, endCoordinates);
    }
    // muevo un lugar izquierda
    if (isPossible(i,j-1,mat,path)) {
        findPaths(mat, path, i , j-1, endCoordinates);
    }

    // backtrack: remove the current cell from the path
    path.pop();
}

/**
 * Verifico que efectivamente pueda ir a ese lugar, verificando que no este en el camino por el que ya pse
 * @param i pos de la fila
 * @param j pos de la columna
 * @param mat matriz
 * @param path camino actual
 * @returns {boolean}
 */
function isPossible(i, j, mat, path){
    //verifico que pueda acceder a esa posicion acorde a los limites de los arrays
    if (isInsideMatrix(i,j,mat)){
        let actual = mat[i][j];
        let alreadyThere = _.contains(path, actual);
        return !alreadyThere;
    } else {
        return false;
    }
}

/**
 * Retorna un booleano indicando si puedo o no acceder a esa parte de la matriz
 * @param i
 * @param j
 * @param mat
 * @returns {boolean}
 */
function isInsideMatrix(i,j,mat){
    let F = mat.length;
    let C = mat[0].length;
    //verifico que pueda acceder a esa posicion acorde a los limites de los arrays
    if (((i >= 0 && i < F && j  >= 0 && j  < C)) ){
        return true;
    } else {
        return false;
    }
}