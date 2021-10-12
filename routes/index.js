const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControllers');


module.exports = function(){

    //Agregar nuevas apis vía post
    router.post('/apis', 
    apiController.nuevaApi
    );
//Obtener registros de api
    router.get('/apis',
        apiController.obtenerApis
    );
    //Obtener api en específico
    router.get('/apis/:id',
    apiController.obtenerApi
    );

    //Actualizar registro con Id específico
    router.put('/apis/:id',
    apiController.actualizarApi);
        //Eliminar api desde Id
        router.delete('/apis/:id', 
        apiController.eliminarApi);
    

    return router;

    
}