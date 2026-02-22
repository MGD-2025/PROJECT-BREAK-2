const User = require("../models/User")

const authController = {

login: async (req,res)=>{
    try{
        const { Email, Password } = req.body
        const user = await User.findOne({ Email, Password})
        if(!user){
            return res.status(400).send("Usuario no existe")
        }
        if(user.Password !== Password){
            return res.status(400).send("Password incorrecto")
        }
        req.session.user = user
        res.redirect('/dashboard')
    }catch(error){
        console.log(error)
        res.status(500).send("Error login")
         }
    },
    showLogin: (req, res)=>{
    res.send(`
        <h2>Login admin</h2>
        <form action="/login" method="POST">
            <input type="email" name="Email" placeholder="Email"><br>
            <input type="password" name="Password" placeholder="Password"><br>
            <button type="submit">Entrar</button>
        </form>
    `)
}
}

module.exports = authController