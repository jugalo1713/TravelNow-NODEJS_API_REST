//--se trae el paquete EXPRESS

const express = require('express');

//se trae cors
const cors = require('cors');

//traer rutas

const rutas = require('../routes/rutasReservas');
//const rutasReservas = require('../routes/rutasReservas.js');

//traer conexion a BD
const { conectarBD } = require('../database/conexion.js');

class ServidorModelo {
    constructor() {
        this.app = express();
        this.despertarBaseDatos();
        this.crearMiddelwares();
        this.llamarRutasAPI();
    }

    despertarServidor() {
        //-----------levantamiento del servidor

        this.app.listen(process.env.PORT)
    }

    llamarRutasAPI()
    {
        this.app.use('/', rutas);
        //this.app.use('/', rutasReservas);

    }

    despertarBaseDatos()
    {
        conectarBD();
    }

    crearMiddelwares()
    {
        this.app.use(cors());//accesos
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        
    }

}

module.exports=ServidorModelo;