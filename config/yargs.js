const descripcion = { demand: true, alias: 'd' };
const completado = { demand: true, alias: 'c', default: true };
const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', { descripcion })
    .command('listar', 'Listar las tareas')
    .command('actualizar', 'Actualizar la tarea', { descripcion, completado })
    .command('borrar', 'Borrar una tarea', { descripcion })
    .help().argv;

module.exports = {
    argv
};