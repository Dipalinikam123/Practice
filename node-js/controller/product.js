const fs = require('fs')
const model = require('../model/product')
const Product = model.Product

// Create POST / products
exports.createProduct = (req, res) => {
    console.log('---body', req.body)
    const product = new Product(req.body)
    product.save((err, doc) => {
        console.log({ err, doc })
    })
}

//Read api => GET / product 
exports.getProduct = (req, res) => {
    res.json(products)
}

//Read api => GET / product/:id  for single product
exports.getSingleProduct = (req, res) => {
    const id = +req.params.id
    console.log(id)

    const product = products.find(e => e?.id === id)
    res.json(product)
}

//update api => PUT / product/:id  => replace object data to updated object data
exports.putProduct = (req, res) => {
    const id = +req.params.id
    const product = products.findIndex(e => e?.id === id)
    // console.log("---prr00", product)
    products[product] = { ...req.body, id: id }
    res.status(201).json("updated")
}

//update api => PATCH / product/:id  => only modify provided data 
exports.patchProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(e => e?.id === id)
    // console.log("---productIndex", productIndex)
    products.splice(productIndex, 1, { ...products[productIndex], ...req.body })
    // console.log("---product", product)

    res.status(201).json("updated..")
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id
    const product = products.findIndex(e => e?.id === id)
    console.log("deleted-product--", product)
    products.splice(product, 1)
    res.status(201).json("Deleted..")
}