// requireds. Estos sirven para meter  paquetes a nuestro proyecto. Es básicamente como un include
const fs = require('fs'); //proyecto propio de node
/*  const fs = requite('express');//esto no es una libreria propia de node. es un paquete que se instala. los paquetes que no son nativos de no
    const fs = requite('./fs'); */ //de archivos que nosotros creamos en el proyecto
const colors = require('colors');

let listarTabla = (base, limite = 10) => { // el limite=10 quiere decir que limite siempre tenra un valor por default de 10
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i*base}`.green);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        //la ventaja de usar la clase Number es que si le mandamos un numero como string lo reconoce y no hay ningun problema
        if (!Number(base)) {
            reject(`La base "${base}" no es un numero!`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite "${limite}" no es un numero!`);
            return;
        }

        let data = '';

        for (let i = 1; i < limite; i++) {
            data += `${i} * ${base} = ${i*base} \n`;
        }

        //esta funcion crea o sobre escribe archivos en el sistema  
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}