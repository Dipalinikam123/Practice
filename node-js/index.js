const express = require('express');
const fs = require('fs')

const data=JSON.parse(fs.readFileSync('./public/data.json'))
const products= data.products;

const server= express();
server.use(express.json()); // to read post method's res.body

// api root or base url = http://localhost:4001

//Read api => GET / product 
server.get('/products',(req,res)=>{
    res.json(products)
})
//Read api => GET / product/:id  for single product
server.get('/products/:id',(req,res)=>{
    const id=+req.params.id
    console.log(id)

    const product= products.find(e=>e?.id===id)
    res.json(product)
}) 
// -------------------------------------------------
// Create POST / products
server.post('/products',(req,res)=>{
    console.log('---body', req.body)
    products.push(req.body)
    res.json(req.body)
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})

server.listen(4001,()=>{
    console.log('server started...')
})