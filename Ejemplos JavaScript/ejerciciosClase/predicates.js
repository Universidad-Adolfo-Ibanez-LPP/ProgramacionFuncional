// predicados

const isEven = x => x%2 === 0
const greaterThan = min => x => x > min
const notEqual = y => x => x !== y
const where = (property, value) => x => x[property] === value
const whereNot = (property, value) => x => x[property] !== value

// ejemplos de uso

console.log([1,2,3,4,5,6].filter(isEven))
// [2,4,6]

console.log([1,2,3,4,5,6].filter(greaterThan(3)))
// [4,5,6]

console.log([1,2,3,4,5,6].filter(notEqual(3)))
// [1,2,4,5,6]

console.log([{x:1, y: 20}, {x: 35, y: 23}].filter(where('x', 35)))
// [{x: 35, y: 23}]

console.log([{x:1, y: 20}, {x: 35, y: 23}].filter(whereNot('x', 35)))