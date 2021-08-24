const {crearArchivo} = require('./helpers/multiplicar');
// *******************************
console.log(process.argv);
const [ , , arg3] = process.argv;
const [, base] = arg3.split('=');
// ******************************* console.log(base);
crearArchivo(base)
.then(file=>console.log(file,'creado'))
.catch(error=>console.log(error));
//********************************* */