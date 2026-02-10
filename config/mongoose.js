// Conexión a la BBDD (mongoose)
const mongoose = require ('mongoose')
const MONGO_URI = process.env.MONGO_URI


require ('dotenv').config ()

const dbConection = async() =>{
    try{
        await mongoose.conect (MONGO_URI)
    }catch (error){
        console.error (error)
    }
}


module.exports =dbConection