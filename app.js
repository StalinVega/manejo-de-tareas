const argv=require('./config/yargs').argv;
const tareas=require('./controlador/tareas-porhacer');
const colors=require('colors');

let comando=argv._[0];

switch (comando){
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log("Crera una tarea");
        break;
    case 'listar':
        console.log("Listar todas las tareas");
        let listado = tareas.listar();
        for(let tarea of listado){
            console.log("===============Por Hacer==========");
            console.log(tarea.descripcion);

        }
        break;
    case 'Actualizar':
        console.log("Actualizar una tarea");
        let acutualizado=tareas.actualizar(argv.descripcion, argv.completado)
        console.log(acutualizado)
        break;
    case 'Borrar':
        let borrado=tareas.borrado(argv.descripcion)
        console.log(borrado)
        break;
    default:
        console.log("comando no reconocido");
}