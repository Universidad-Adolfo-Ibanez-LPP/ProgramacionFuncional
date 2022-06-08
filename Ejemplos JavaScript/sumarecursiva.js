
//obtiene longitud de la lista
function len(list){
    return (list)?list.length:0;
}
//devuelve la cabeza
function head(list) {
    return len(list) > 0 ? list[0] : null;
}
//devuelve el resto sin la cabeza
function tail(list) {
    return len(list) > 1 ? list.splice(1) : null;
}

// Entry point.
function sum(list) {
    return recSum(list, 0);
}
// Recursive call.
function recSum(list) {
    const h = head(list);
    if (!h) return 0;
    return h + recSum(tail(list));
}

console.log(sum( [ 3, 21, 5 ]));
