const express = require('express')
const router = express.Router()

const authRoutes = require('./authRoutes')
const productRoutes = require('./productRoutes')


router.use ('/', productRoutes )
router.use ('/dashboard', authRoutes )


module.exports = router