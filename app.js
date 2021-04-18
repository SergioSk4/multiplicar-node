const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //requireds
const colors = require('colors');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.limite, argv.base)
            .then(res => console.log(`Tabla del ${argv.base} \n${res}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ` + `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//const fs = require('express'); No nativo de node
//const fs = require('./fs'); Archivos escritos por nosotros


//console.log(process.argv);
//let argv2 = process.argv; Argumentos ingresados en consola
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(argv);