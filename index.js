//Aquí van todas las rutas y  puerto para que se levante el servidor, la conexión a bbdd. Es el principal 

const express = require('express')
const app= express ()
const PORT = 8080

app.listen (PORT, () => {
    console.log(`El servidor está levantado en https://localhost:${PORT}`)
})