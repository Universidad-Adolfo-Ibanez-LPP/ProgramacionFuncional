/**
 * Esta funcion encuentra todos los caminos posibles
 * moviendose unicamente para la derecha y/o abajo
 *
 * @param mat matriz con valores
 * @param path camino posible
 * @param i pos de fila
 * @param j pos de columna
 */
function findPaths( mat, path,  i, j) {
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    //obtengo los extremos de fila y columna
    let M = mat.length;
    let N = mat[0].length;

    // Si llegue al final imprimo el path
    if (i == M - 1 && j == N - 1) {
        path.push(mat[i][j]);
        console.log(path);
        path.pop();
        return;
    }
    // meto la pos actual como parte del camino
    path.push(mat[i][j]);

    // muevo un lugar a la derecha
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N)) {
        findPaths(mat, path, i, j + 1);
    }
    // muevo un lugar abajo
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N)) {
        findPaths(mat, path, i + 1, j);
    }

    // backtrack: remove the current cell from the path
    path.pop();
}



let mat = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] ];

var path =  [];

// start from `(0, 0)` cell
let x = 0, y = 0;

findPaths(mat, path, x, y);