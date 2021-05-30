# TravelNow-NODEJS_API_REST

Creación de API realziada en NODEJS desplegada en Heroku con BD en MongoDB, para consumirla tener ne cuenta las siguientes instrucciones:


--API desplegada:

https://travelnow2.herokuapp.com/

--Petición GET para traer todas las reservas:

https://travelnow2.herokuapp.com/Reservas

--Petición GET para buscar una reserva en particular:

https://travelnow2.herokuapp.com/BuscarReserva/{ID}

--Petición PUT 

https://travelnow2.herokuapp.com/actualizarReserva/{ID}

--Petición DELETE

https://travelnow2.herokuapp.com/eliminarReserva/{ID}

--Petición POST

https://travelnow2.herokuapp.com/Reservar

{

"nombreCliente": "Liliana",
        "apellidoCliente": "Londoño Londoño",
        "telefonoCliente": "310444444",
        "fechaInicioReserva": "06/06/2021",
        "fechaFinalReserva": "06/06/2021",
        "numPersonas": "2",
        "tipoPaquete": "premium",


}

