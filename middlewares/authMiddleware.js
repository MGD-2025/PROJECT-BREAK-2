const authMiddleware = (req,res,next)=>{

    if(!req.session.user){
        return res.status(403).send("No autorizado")
    }

    if(req.session.user.Role !== "admin"){
        return res.status(403).send("No eres admin")
    }

    next()
}

module.exports = authMiddleware