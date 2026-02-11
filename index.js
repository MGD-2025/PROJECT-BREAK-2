//Aquí van todas las rutas y  puerto para que se levante el servidor, la conexión a bbdd. Es el principal 

const express = require('express')
const app= express ()
const PORT = 8080
const router = require('./routes/index')
require ('dotenv').config()

const dbConection = require('./config/mongoose')
dbConection()

app.use (express.json())
app.use(express.urlencoded({ extended: true }))
app.use (router)

app.listen (PORT, () => {
    console.log(`El servidor está levantado en https://localhost:${PORT}`)
})