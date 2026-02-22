//Aquí se definen los endpoints y que hacen 
const Product = require ('../models/Product')
const getNavBar = require ('../helpers/getNavBar')

const productController ={
    showProducts: async (req, res) =>{
        try{
            const products = await Product.find()
            let html = getNavBar();
            for (let product of products) {
                html += `
                    <div class="product-card">
                    <h2>${product.Nombre}</h2>
                    <img src="${product.Imagen}" alt="${product.Nombre}">
                    <p>${product.Descripción}</p>
                    <p>${product.Talla}</p>
                    <p>${product.Precio}€</p>
                    <p>${product.Categoría}</p>
                    <a href="/products/${product._id}">Ver</a>
                    </div>
                    `;
    }
            res.send(html);

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },

    showProductById: async (req, res) =>{
        try{
            const id = req.params.productId
            const products = await Product.findById(id)
            let html = getNavBar();
                html += `
                    <div class="product-card">
                    <h2>${products.Nombre}</h2>
                    <img src="${products.Imagen}" alt="${products.Nombre}">
                    <p>${products.Descripción}</p>
                    <p>${products.Talla}</p>
                    <p>${products.Precio}€</p>
                    <p>${products.Categoría}</p>
                    </div>
                    `;

            res.send(html);

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },

 showProductAdmin: async (req, res) =>{
        try{
            const id = req.params.productId
            const products = await Product.findById(id)
            let html = getNavBar();
                html += `
                    <div class="adminproduct-card">
                    <h2>${products.Nombre}</h2>
                    <img src="${products.Imagen}" alt="${products.Nombre}">
                    <p>${products.Descripción}</p>
                    <p>${products.Talla}</p>
                    <p>${products.Precio}€</p>
                    <p>${products.Categoría}</p>
                    <a href="/dasboard/${products._id}">Editar</a>
                    <a href="/dasboard/${products._id}">Borrar</a>
                    </div>
                    `;

            res.send(html);

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },

    showNewProduct: async (req, res) =>{
        try{
         let html = getNavBar();
            html += `
            <div class="newproduct-card">
            <h2> Crear producto </h2>        
            <form action="/dashboard" method="POST">
                <label>Nombre</label><br>
                <input type="text" name="Nombre"><br><br>
                <label>Descripción</label><br>
                <textarea name="Descripción"></textarea><br><br>
                <label>Precio</label><br>
                <input type="number" name="Precio"><br><br>
                <label>Imagen URL</label><br>
                <input type="text" name="Imagen"><br><br>
                <label>Categoría</label><br>
                <select name="Categoría">
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Zapatos">Zapatos</option>
                    <option value="Accesorios">Accesorios</option>
                </select><br><br>
                <label>Talla</label><br>
                <select name="Talla">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select><br><br>
                <button type="submit">Crear</button>
            </form>
            </div>
        `;

            res.send(html);
        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },
  

    createProduct: async (req, res) =>{
        try{
            const products = await Product.create(req.body)
            res.redirect('/dashboard')
            getNavBar()

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
            res.send('Error al añadir producto')
        }
    },
    showProduct: async (req, res) =>{
        try{
            const products = await Product.find()
            let html = getNavBar();
            for (let product of products) {
                html += `
                    <div class="product-card">
                    <h2>${product.Nombre}</h2>
                    <img src="${product.Imagen}" alt="${product.Nombre}">
                    <p>${product.Descripción}</p>
                    <p>${product.Talla}</p>
                    <p>${product.Precio}€</p>
                    <p>${product.Categoría}</p>
                    <a href="/products/${product._id}">Ver detalle</a>
                    <button type="submit">Actualizar</button>
                    <button type="reset">Eliminar</button>
                    </div>
                    `;
    }
            res.send(html);

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },

    showEditProduct: async (req, res) =>{
        try{
            const id = req.params.productId
            const products = await Product.findById(id)
            let html = getNavBar();
            html += `
            <div class="editproduct-card">
            
            <form action="/dashboard/update/${products._id}" method="POST">
                <label>Nombre producto</label><br>
                <input type="text" name="Nombre" value=${products.Nombre}><br><br>
                <label>Descripción</label><br>
                <textarea name="Descripción">value=${products.Descripción}</textarea><br><br>
                <label>Talla</label><br>
                <select name="Talla" value=${products.Talla}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select><br><br>
                <label>Precio</label><br>
                <input type="number" name="Precio" value ${products.Precio}<br><br>
                <label>Categoría</label><br>
                <select name="Categoría" value=${products.Categoría}>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Zapatos">Zapatos</option>
                    <option value="Accesorios">Accesorios</option>
                </select><br><br>
                <label>Imagen URL</label><br>
                <input type="text" name="Imagen"><br><br>
                <button type="submit">Guardar</button>
            </form>
            </div>
        `;

            res.send(html);

        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    },
    updateProduct: async (req, res) =>{
        try{
            const id = req.params.productId
            const products = await Product.findByIdAndUpdate(id, req.body)
            res.redirect('/dashboard')
            getNavBar()

        }catch (error){
            console.error(error)
            res.status(500).json('Error al actualizar producto')
        }
    },
    deleteProduct: async (req, res) =>{
        try{
            const id = req.params.productId
            const products = await Product.findByIdAndDelete(id, req.body)
            res.redirect('/dashboard')
            getNavBar()

        }catch (error){
            console.error(error)
            res.status(500).json('Error al eliminar producto')
        }
    },

    showByCategory: async (req, res) =>{
        try{
            const categoria = req.params.Nombre
            const products = await product.find({Categoría:categoria})
            let html= `<h2>${categoria}</h2>`
            for (let product of products){
                html += `
                <div class = "categorproduct-card">
                <h2>${products.Nombre}</h2>
                <img src="${product.Imagen}" alt="${product.Nombre}">
                <a href="/products/${product._id}">Ver</a>
                </div>
                `
            }
            res.send (html)
        }catch (error){
            console.error (error)
            res.send('Error')
        }
    }
}

module.exports = productController