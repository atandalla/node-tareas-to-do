// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const tareas = require('./controller/tareas');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = tareas.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(`Descripcion: ${tarea.descripcion}`);
            if (tarea.completado == true) {
                console.log(colors.blue.underline('Estado: ', tarea.completado));
            } else {
                console.log(colors.red.underline('Estado: ', tarea.completado));
            }

            console.log('=========================='.green);
        }


        break;

    case 'actualizar':

        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'eliminar':

        let borrado = tareas.eliminar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido.');

}