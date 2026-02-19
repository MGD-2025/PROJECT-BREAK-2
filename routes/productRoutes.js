const express = require('express')
const router = express.Router()
const productController= require ('../controllers/productControllers')

// GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
router.get ('/', productController.showProducts)

// POST /dashboard: Crea un nuevo producto.
router.post('/dashboard', productController.createProduct)

// GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido.
//  Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
router.get ('/dashboard', productController.showProduct)

// GET /products/:productId: Devuelve el detalle de un producto.
router.get ('/products/:productId', productController.showProductById)


// GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
router.get ('/dashboard/new', productController.showNewProduct)


// GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
router.get ('/dashboard/:productId', (req, res)=>{
    res.send ('Ver Producto por Id (admin)')
})

// GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get ('/dashboard/:productId/edit', productController.showEditProduct)

// PUT /dashboard/:productId: Actualiza un producto.
router.post ('/dashboard/update/:productId', productController.updateProduct)

// DELETE /dashboard/:productId/delete: Elimina un producto.
router.delete ('/dashboard/:productId/delete', productController.deleteProduct)

module.exports = router