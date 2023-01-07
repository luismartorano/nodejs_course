// modulo externo
const minimist = require("minimist")




//interno

const moduloSoma = require('./soma').soma
const args = minimist(process.argv.slice(2))

moduloSoma(2, 2)


const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(a, b)
console.log(a + b)
console.log(a * b)

moduloSoma(a, b)


//node index.js --a=100 --b=333