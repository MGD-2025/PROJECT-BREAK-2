const getNavBar = (req) =>{

    let authLink = `<a href="/login">Login</a>`

    if(req.session && req.session.user){
        authLink = `<a href="/logout">Logout</a>`
    }

    return `
        <div class='getNavBar'>
            <a href="/">Productos</a>
            <a href="/categoria/camisetas">Camisetas</a>
            <a href="/categoria/pantalones">Pantalones</a>
            <a href="/categoria/zapatos">Zapatos</a>
            <a href="/categoria/accesorios">Accesorios</a>
            <a href="/login">Login</a>
        </div>
    `
}

module.exports=getNavBar 