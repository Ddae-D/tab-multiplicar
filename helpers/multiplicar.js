//tablas de multiplicar
const fs = require('fs');
console.clear();
const crearArchivo = ( base )=>{
    return new Promise((resolve, reject)=>{
        let resultado = '';
        for(let i=1;i<=10;i++){
            resultado+=(`${base} X ${i} = ${base*i}\n`);
        }
        if(isNaN(base)===false){
            if(base===0){
                console.log('El resultado es 0');
            }else{
                console.log('**********');
                console.log(`Tabla N. ${base}`);
                console.log('**********');
                console.log(resultado);
                fs.writeFileSync(`./helpers/tabla-${base}.txt`,resultado);
                resolve(`tabla${base}.txt`);     
            }
        }else{
            reject('No puedo crear la tabla de multiplicar, verifica los parametros');
        }     
    });
}


module.exports = {
    crearArchivo
}