//importar de express las variables request y response

const { request, response } = require('express');

//importar el modelo

const ReservaModelo = require('../models/ReservaModelo.js')

async function buscarReservas(peticion = request, respuesta = response) {
    
    let datosReserva = await ReservaModelo.find();
    
    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });

}

async function buscarxReserva(peticion = request, respuesta = response) {
    
    let id = peticion.params.id;
    let datosReserva = await ReservaModelo.findById(id);
    
    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });

}

async function agregarReserva(peticion = request, respuesta = response) {
    
    let datosPeticion = peticion.body;
    
    let Reserva = new  ReservaModelo(datosPeticion);
    await Reserva.save();

    respuesta.json({
        estado: true,
        mensaje: 'Reserva agregada con éxito!!',
        datos: Reserva
    });
}

async function editarReserva(peticion = request,  respuesta= response) {

    let id = peticion.params.id;
    let datosPeticion = peticion.body;

    await ReservaModelo.findByIdAndUpdate(id, datosPeticion);

    respuesta.json({
        estado: true,
        mensaje: 'Reserva Actualizado con éxito!!'
    });
}

async function eliminarReserva(peticion = request, respuesta = response) {
    
    let id = peticion.params.id;
    await ReservaModelo.findByIdAndDelete(id);
    
    respuesta.json({
        estado: true,
        mensaje: 'Reserva eliminada con exito!!'
    });
}

module.exports={eliminarReserva, editarReserva, agregarReserva, buscarReservas, buscarxReserva }