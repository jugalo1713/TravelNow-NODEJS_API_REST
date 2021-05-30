const {model, Schema}= require ('mongoose');

const reservaSchema = Schema({
    nombreCliente:{
        type:String,
    },
    apellidoCliente:{
        type:String,
    },
    telefonoCliente:{
        type:String
    },
    fechaInicioReserva:{
        type:String 
    },
    fechaFinalReserva:{
        type:String
    },
    numPersonas:{
        type:String
    },
    tipoPaquete:{
        type:String
    },

});

module.exports=model('Reserva', reservaSchema);