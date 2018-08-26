//REQUIRED
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// let base = '10';

// console.log(multiplicar);

// let argv2 = process.argv;

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(mensaje => console.log(mensaje));
        break;

    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado: ` + ` ${archivo}`.green))
            .catch(err => console.log(err));
        break;

    case 'comer':
        console.log('comer');
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);
// console.log(`Limite ${argv.limite}`);
// console.log(argv2);
// 
// let parametro = argv[2];
// let base = parametro.substring(parametro.lastIndexOf("=") + 1);
// let base = parametro.split("=")[1];
// crearArchivo(base)
//     .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
//     .catch(err => console.log(err));