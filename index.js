//Aquí van todas las rutas y  puerto para que se levante el servidor, la conexión a bbdd. Es el principal 

const express = require('express')
const session = require("express-session")
require ('dotenv').config()
const app= express ()
const PORT = 8080

app.use(express.static("public"))

app.use (express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))

const dbConection = require('./config/mongoose')
dbConection()

const router = require('./routes/index')
const productRoutes = require ('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')

app.use (router)
app.use(productRoutes)
app.use(authRoutes)


app.listen (PORT, () => {
    console.log(`El servidor está levantado en https://localhost:${PORT}`)
})