//tablas de multiplicar
const fs = require('fs');
console.clear();
const crearArchivo = async( base, listar )=>{
    try {
            let resultado = '';
            for(let i=1;i<=10;i++){
                resultado+=(`${base} X ${i} = ${base*i}\n`);
            }
            if(isNaN(base)){
                return ('Solo numericos');
            }
            else if(base===0){
                return('El resultado es 0');
            }
            else{
                if(listar){
                    console.log('**********');
                    console.log(`Tabla N. ${base}`);
                    console.log('**********');
                    console.log(resultado);
                }
                else{
                    fs.writeFileSync(`./helpers/tabla-${base}.txt`,resultado);
                }    
                return `tabla${base}.txt`; 
            }
    } catch (error) {
        throw error;
        
    }
}
module.exports = {
    crearArchivo
}