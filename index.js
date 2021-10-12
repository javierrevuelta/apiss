const { application } = require('express');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar DB
conectarDB();

//app.use(cors(corsOptions));
app.use(cors());

//Habilitar Cors
/* const whitelist = ['https://localhost:3000'];
const corsOptions = {
    origin: (origin, callback)=>{
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe){
            callback(null,true)
        }else{
            callback(new Error('No Permitido por CORS'))
        }
    }
} */


//Conectar a mongodb
/* mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiss', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}) */

//Puerto de la app
const PORT = process.env.PORT || 7000;

//Habilitar express.json
app.use(express.json({extended:true}));
app.use(express.urlencoded({ extended: true }));

//Router
app.use('/',routes());

app.listen(PORT, () => {
    console.log('Servidor funcionando')
})