// const fs = require('fs')
const model = require('../model/Product')
const Product = model.Product
const ejs = require('ejs')
const path = require('path')

// view (pages) // need data so export this to pages/html.ejs
exports.getProductSSR = async (req, res) => {
    const products = await Product.find()
    // res.json(products)
    ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), { product: products[0] }, function (err, str) {
        res.send(str)
        // str => Rendered HTML string
    });
}

// Create POST / products
exports.createProduct = async (req, res) => {
    try {
        // Log the incoming request body
        console.log('---body', req.body);

        // Create a new product instance , this instant is mostly used in only create type
        const product = new Product(req.body);

        // Save the product to the database
        const doc = await product.save();

        // Respond with the created document
        res.status(201).json(doc);
    } catch (err) {
        // Respond with an error if the save fails
        res.status(400).json(err);
    }
};

//Read api => GET / product 
exports.getProduct = async (req, res) => {
    try {
        const pageSize = 1; // Number of products per page
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided

        const query = Product.find();

        // Apply sorting if provided
        if (req.query.sort && req.query.order) {
            query.sort({ [req.query.sort]: req.query.order === 'asc' ? 1 : -1 });
        }

        // Apply pagination
        const products = await query.skip(pageSize * (page - 1)).limit(pageSize).exec(); // Execute the query only once

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Read api => GET / product/:id  for single product
exports.getSingleProduct = async (req, res) => {
    const id = req.params.id
    console.log(id)

    const product = await Product.findById(id).exec();
    res.json(product)
}

//update api => PUT / product/:id  => replace object data to updated object data
exports.putProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(doc)
    }
    catch (error) {
        res.json(error)
    }
}

//update api => PATCH / product/:id  => only modify provided data 
exports.patchProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(doc)
    }
    catch (error) {
        res.json(error)
    }
    // console.log("---product", product)
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    const doc = await Product.findByIdAndDelete(id)
    res.status(201).json("Deleted..")
}