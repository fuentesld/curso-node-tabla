const {crear_archivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const color = require('colors')

console.clear();
console.log(color.white(process.argv));
console.log(color.green(argv));
// console.log(process.argv);
// base = 5

crear_archivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green))
    .catch(err => console.log(err))
