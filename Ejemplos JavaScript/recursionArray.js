
function findPaths( mat, path,  i, j) {
    // base case
    if (mat == null || mat.length == 0) {
        return;
    }

    let M = mat.length;
    let N = mat[0].length;

    // if the last cell is reached, print the route
    if (i == M - 1 && j == N - 1) {
        path.push(mat[i][j]);
        console.log(path);
        path.pop();
        return;
    }

    // include the current cell in the path
    path.push();

    // move right
    if ((i >= 0 && i < M && j + 1 >= 0 && j + 1 < N)) {
        findPaths(mat, path, i, j + 1);
    }

    // move down
    if ((i + 1 >= 0 && i + 1 < M && j >= 0 && j < N)) {
        findPaths(mat, path, i + 1, j);
    }

    // backtrack: remove the current cell from the path
    path.pop();
}



let mat = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] ];

let path =  [];

// start from `(0, 0)` cell
let x = 0, y = 0;

findPaths(mat, path, x, y);