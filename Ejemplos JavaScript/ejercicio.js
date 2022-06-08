
var _ = require('underscore');

pisos = [{año: 2000, metros: 100, habitaciones: 3, garaje: true, zona: "A"},
 {año: 2012, metros: 60, habitaciones: 2, garaje: true, zona: "B"},
 {año: 1980, metros: 120, habitaciones: 4, garaje: false, zona: "A"},
 {año: 2005, metros: 75, habitaciones: 3, garaje: true, zona: "B"},
 {año: 2015, metros: 90, habitaciones: 2, garaje: false, zona: "A"}]

function convert(value){
    return (value) ? 1 : 0;
}

function agregarPrecio(piso){
    let precio = (piso['metros'] * 1000 + piso['habitaciones'] * 5000 + convert(piso['garaje']) * 15000) * (1 - (2020 - piso['año']) / 100)
    if (piso['zona'] == 'B')
        precio *= 1.5
    piso['precio'] = precio
    return piso
}

function getNearest(piso){
    return (piso['precio'] <= 95000) ? true:false;
}

console.log(_.filter(_.map(pisos,agregarPrecio), getNearest))

