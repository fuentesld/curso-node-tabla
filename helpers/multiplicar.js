const color = require('colors')
const fs = require('fs')

const crear_archivo = async (base = 5, listar=false, hasta = base) => {

    if (hasta < base) {
        hasta = base
    }
    // console.log(base, hasta);

    try {
        for (let j = base; j <= hasta; j++){
            // console.log(j, hasta);
            let salida, consola = ''
            
            for( let i = 1; i <= 10; i++) {
                salida += `${j} x ${i} = ${base*i}\n`
                consola += `${color.green(j)} x ${color.green(i)} = ${base*i}\n`
            }
            if (listar) {
                console.log('====================='.yellow);
                console.log(`   Tabla del ${j}`.yellow);
                console.log('====================='.yellow)
                console.log(consola)
            }
    
            fs.writeFileSync(`./salida/tabla-${j}.txt`, salida) 
    
            console.log(`tabla-${j}.txt creada`.green);  
        }
        return 'Listo!!'

    } catch (error) {
        throw error
    }

}

module.exports = {
    crear_archivo
}

    
// return new Promise (
//     (resolve, reject) => {
//         console.clear()

//         let salida = ''

//         console.log('=====================');
//         console.log(`   Tabla del ${base}`);
//         console.log('=====================');

//         for( let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base*i}\n`
//         }


//         console.log(salida);

//         fs.writeFile(
//             `tabla-${base}.txt`, 
//             salida, 
//             (err)=> {
//                 if (err) {
//                     console.log('hay error');
//                     reject(err)
//                 }
//                 resolve(`tabla-${base}.txt`)
                
//             }
//         )
//     }
// )