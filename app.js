const { number, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:number,
        demandOption:true
        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw 'Base no numerica'
            }
            return true;
        })
        .option('l',{
            alias:'listar',
            type:boolean,
            demandOption:false
        })
        .argv;


crearArchivo(argv.base, argv.listar)
.then(file=>console.log(file,'creado'))
.catch(error=>console.log(error));
