const descripcion={
    demand: true,
    alias: 'd',
    desc:"descripcion de tarea"

};

const completado={
    default:true,
    alias: 'c',
    desc:'Malcar como pendiente la tarea'
};
const argv=require('yargs')
    .command('crear','Crear una tarea',{
        descripcion
    })
    .command('actualizar','Actualizar una tarea',{
        descripcion,
        completado
    })
    .command('borrado','borrar una tarea',{
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }