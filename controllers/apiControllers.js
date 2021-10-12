const Apip = require("../models/Apip");

//Cuando se crea nueva Api
exports.nuevaApi = async (req,res,next) => {
    const apip = new Apip(req.body);
    try{
        
        await apip.save();
        console.log(req.body)
        res.json({mensaje:'La Api se agregó correctamente'});

    }catch(error){
        console.log(error);
        next();
    }
}

//Obtener todas las Apis
exports.obtenerApis = async (req, res, next)=>{
    try {
        const apis = await Apip.find({});
        res.json(apis);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener una api en específico
exports.obtenerApi=async (req,res,next)=>{
    try {
        const api = await Apip.findById(req.params.id);
        res.json(api);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualiza registro por su ID
exports.actualizarApi= async (req,res,next)=>{
    try {
        const api = await Apip.findOneAndUpdate({_id:req.params.id}, req.body,{
            new:true
        });
        res.json(api);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Elimina registro por ID
exports.eliminarApi= async(req,res,next)=>{
    try {
        await Apip.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'La Api fue eliminada'})
    } catch (error) {
        console.log(error);
        next();
    }
}