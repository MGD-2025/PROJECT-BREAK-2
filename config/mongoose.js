// Conexión a la BBDD (mongoose)
const mongoose = require ('mongoose')
const MONGO_URI = process.env.MONGO_URI


require ('dotenv').config ()

const dbConection = async() =>{
    try{
        await mongoose.connect (MONGO_URI)
        console.log('Conectado a BBDD')
    }catch (error){
        console.error (error)
    }
}


module.exports = dbConection