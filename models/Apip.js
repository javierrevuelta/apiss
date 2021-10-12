const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const apiSchema = new Schema({
    titulo:{
        type:String,
        trim:true
    },
    
    web:{
        type:String,
        trim:true
    },
    
    descripcion:{
        type:String,
        trim:true
    },
    categoria:{
        type:String,
        trim:true
    },
    
    planes:{
        type:String,
        trim:true
    },
    
    prueba:{
        type:String,
        trim:true
    },
    
    clientes:{
        type:String,
        trim:true
    },
    
    preciominimo:{
        type:String,
        trim:true
    },
    
    llamadasgratuitas:{
        type:String,
        trim:true
    }
})





module.exports = mongoose.model('Apip', apiSchema);