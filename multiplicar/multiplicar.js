const fs = require('fs'); //Nativo de Node
var colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base ingresada no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El límite ingresado no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let mult = base * i;

            data += `${base} * ${i} = ${mult} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

let listarTabla = (limite, base) => {

    console.log(`=========== Tabla del ${base} =========`.green);
    return new Promise((resolve, reject) => {
        if (!Number(limite)) {
            reject('El valor ingresado no es un número');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let mult = base * i;

            data += `${base} * ${i} = ${mult} \n`;
        }

        resolve(data);

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}