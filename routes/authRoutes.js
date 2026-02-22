const express = require('express')
const router = express.Router ()
const authController = require("../controllers/authController")

router.get("/login", authController.showLogin);
router.post('/login', authController.login)
router.get("/logout", (req,res)=>{
    req.session.destroy()
    res.redirect("/login")
})


module.exports = router