const {Router} = require('express');

const{buscarReservas}= require('../controllers/reservaController.js');
const{eliminarReserva}= require('../controllers/reservaController.js');
const{editarReserva}= require('../controllers/reservaController.js');
const{agregarReserva}= require('../controllers/reservaController.js');
const{buscarxReserva}= require('../controllers/reservaController.js');

//importo las validaciones
const {validarPeticion}=require('../validations/validaciones.js');

//importo el metodo check del express validator
const {check}=require('express-validator');

//crear la lista de validaciones en arreglo

let validaciones = Array(
    check('nombreCliente', 'Campo Obligatorio').not().isEmpty(),
    check('apellidoCliente', 'Campo Obligatorio').not().isEmpty(),
    check('telefonoCliente', 'Campo Obligatorio').not().isEmpty(),
    check('fechaInicioReserva', 'Campo Obligatorio').not().isEmpty(),
    check('fechaFinalReserva', 'Campo Obligatorio').not().isEmpty(),
    check('numPersonas', 'Campo Obligatorio').not().isEmpty(),
    check('tipoPaquete', 'Campo Obligatorio').not().isEmpty(),
    validarPeticion
);


//personalizo rutas

const rutas = Router();

//listado rutas

rutas.get('/Reservas', buscarReservas);
rutas.get('/BuscarReserva/:id', buscarxReserva);
rutas.post('/Reservar', validaciones, agregarReserva);
rutas.put('/actualizarReserva/:id', editarReserva);
rutas.delete('/eliminarReserva/:id', eliminarReserva);



//LISTAR RESERVAS

module.exports=rutas;
