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