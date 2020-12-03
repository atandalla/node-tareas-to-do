const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crear una Tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar la Tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una Tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}