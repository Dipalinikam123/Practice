const express = require('express');

const productController=require('./controller/product')

const server = express();
// server.use is used to apply middleware
server.use(express.json()); // These middleware functions allow you to access data from the request body in a readable format.

// api root or base url = http://localhost:4001

//===================================== C R U D =====================================================

// Create POST / products
server.post('/products',productController.createProduct )
// -------------------------------------------------


//Read api => GET / product 
server.get('/products',productController.getProduct )

//Read api => GET / product/:id  for single product
server.get('/products/:id',productController.getSingleProduct )
// -------------------------------------------------

//update api => PUT / product/:id  => replace object data to updated object data
server.put('/products/:id', productController.putProduct)

//update api => PATCH / product/:id  => only modify provided data 

server.patch('/products/:id', productController.patchProduct)
// -------------------------------------------------

server.delete('/products/:id', productController.deleteProduct)

server.listen(4001, () => {
    console.log('server started...')
})