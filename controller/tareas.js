const fs = require('fs');

let tareasPorHacer = [];

const guardarDatos = () => {
    let data = JSON.stringify(tareasPorHacer);
    console.log(`el json ${data}`);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const leerDatos = () => {

    try {
        tareasPorHacer = require('../db/data.json');

    } catch (error) {
        tareasPorHacer = [];
    }

}


const crear = (descripcion) => {

    leerDatos();
    let porHacer = {
        descripcion,
        completado: false
    };

    tareasPorHacer.push(porHacer);
    guardarDatos();

    return porHacer;

}

const getListado = () => {
    leerDatos();
    return tareasPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    leerDatos();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDatos();
        return true;
    }
    return false;

}


const eliminar = (descripcion) => {
    leerDatos();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    }

    tareasPorHacer = nuevoListado;
    guardarDatos();
    return true;

}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar

}