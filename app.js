//importo modelo servidor

const ServidorModelo = require('./models/ServidorModelo.js');

//----Se trae el paquete .ENV
 
require('dotenv').config()

//Instancio el servidor

let servidor = new ServidorModelo();

//levanto el servidor

servidor.despertarServidor();
