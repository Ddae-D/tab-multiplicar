const {crearArchivo} = require('./helpers/multiplicar');
// *******************************
const argv = require('yargs').argv;
//console.log(argv);
//console.log('base:',argv.base);
//console.log(process.argv);
// const [ , , arg3= '-base=1'] = process.argv;
// ******************************* console.log(base);
crearArchivo(argv.base)
.then(file=>console.log(file,'creado'))
.catch(error=>console.log(error));
//********************************* */