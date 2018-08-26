const fs = require('fs');

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log(`===============`.green);
        console.log(`Tabla de ${ base }`.green);
        console.log(`===============`.green);


        if (!Number(base) || !Number(limite)) {
            reject(`${base} o ${limite} no es un numero `);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${ base * i} `);
            }
            resolve('Exito');
        }

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let rst = i * base;
            data += ` ${base} * ${i} = ${rst} \n`;
        }

        fs.writeFile(`tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}