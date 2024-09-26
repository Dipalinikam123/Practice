const express = require('express');

const productController=require('./controller/product')

const server = express();
// server.use is used to apply middleware
server.use(express.json()); // These middleware functions allow you to access data from the request body in a readable format.

// api root or base url = http://localhost:4001

//===================================== C R U D =====================================================


server.post('/products',productController.createProduct )
// -------------------------------------------------



server.get('/products',productController.getProduct )


server.get('/products/:id',productController.getSingleProduct )
// -------------------------------------------------

server.put('/products/:id', productController.putProduct)


server.patch('/products/:id', productController.patchProduct)
// -------------------------------------------------

server.delete('/products/:id', productController.deleteProduct)

server.listen(4001, () => {
    console.log('server started...')
})