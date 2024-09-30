
const express = require('express');

const productController=require('../controller/product')
const routes= express.Router()

// '/' this look like this '/product' because of we apply middleware on index.js file on routes
routes.post('/',productController.createProduct )
.get('/',productController.getProduct )
.get('/ssr',productController.getProductSSR )
.get('/:id',productController.getSingleProduct )
.put('/:id', productController.putProduct)
.patch('/:id', productController.patchProduct)
.delete('/:id', productController.deleteProduct)

exports.routes=routes
