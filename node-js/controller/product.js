const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./public/data.json'))
const products = data.products;


exports.createProduct=(req, res) => {
    console.log('---body', req.body)
    products.push(req.body)
    res.json(req.body)
}
exports.getProduct=(req, res) => {
    res.json(products)
}
exports.getSingleProduct=(req, res) => {
    const id = +req.params.id
    console.log(id)

    const product = products.find(e => e?.id === id)
    res.json(product)
}
exports.putProduct=(req, res) => {
    const id = +req.params.id
    const product = products.findIndex(e => e?.id === id)
    // console.log("---prr00", product)
    products[product] = { ...req.body, id: id }
    res.status(201).json("updated")
}
exports.patchProduct=(req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(e => e?.id === id)
    // console.log("---productIndex", productIndex)
   products.splice(productIndex,1,{...products[productIndex],...req.body})
    // console.log("---product", product)

    res.status(201).json("updated..")
}
exports.deleteProduct=(req, res) => {
    const id = +req.params.id
    const product = products.findIndex(e => e?.id === id)
    console.log("deleted-product--",product)
    products.splice(product,1)
    res.status(201).json("Deleted..")
}