//Aquí se definen los endpoints y que hacen 
const Product = require ('../models/Product')

const productController ={
    showProducts: async (req, res) =>{
        try{
            const products = await Product.find()
            let html = '';
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
            console.log(products)
            let html = '';
                html += `
                    <div class="product-card">
                    
                    <h2>${products.Nombre}</h2>
                    <img src="${products.Imagen}" alt="${products.Nombre}">
                    <p>${products.Descripción}</p>
                    <p>${products.Talla}</p>
                    <p>${products.Precio}€</p>
                    <p>${products.Categoría}</p>
                    <a href="/products/${products._id}">Ver detalle</a>
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
            console.log ('BODY', req.body)
            const products = await Product.create(req.body)
            res.send(products)
        }catch (error){
            console.error(error)
            res.status(500).json('Error')
        }
    }
}

module.exports = productController