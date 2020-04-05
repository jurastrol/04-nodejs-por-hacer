const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const crear = descripcion => {
    let porHacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
    } else {
        return false;
    }
    guardarDB();
    return true;
}

const borrar = (descripcion) => {
    cargarDB();
    let newListadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (newListadoPorHacer.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = newListadoPorHacer;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}