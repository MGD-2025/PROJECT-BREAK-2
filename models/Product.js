//Aquí va la estructura de los product

const mongoose = require('mongoose');

const validSize=  ['XS', 'S', 'M', 'L', 'XL'];
const validCategory = ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'];

const productSchema = new mongoose.Schema({
  Nombre:  { type: String, required: true },
  Descripción: {type:String, required:true}, 
  Imagen:{type:String, required:true},
  Categoría: {type:String, enum:validCategory, required:true},
  Talla: {type:String, enum:validSize, required:true},
  Precio: { type: Number, required: true, min: 0 },

},
{timestamps:true}
)
;

module.exports = mongoose.model('Product', productSchema);

// exportado solo si lo necesitas en otros archivos
//module.exports.validCategory = validCategory;   
//module.exports.validSize = validSize; 