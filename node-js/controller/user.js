// const fs = require('fs')
const model = require('../model/user')
const jwt = require('jsonwebtoken')

const User = model.User



// Create POST / products
// exports.createUser = async (req, res) => {
//     try {
//         // Log the incoming request body
//         console.log('---body', req.body);

//         // Create a new product instance , this instant is mostly used in only create type
//         const user = new User(req.body);
//         var token = jwt.sign({ email: req?.body?.email }, process.env.SECRET);
//         user.token= token;


//         // Save the product to the database
//         const doc = await user.save();

//         // Respond with the created document
//         res.status(201).json(doc);
//     } catch (err) {
//         // Respond with an error if the save fails
//         res.status(400).json(err);
//     }
// };

//Read api => GET / product 
exports.getUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

//Read api => GET / product/:id  for single product
exports.getSingleUser = async (req, res) => {
    const id = req.params.id
    console.log(id)

    const user = await User.findById(id).exec();
    res.status(200).json(user)
}

//update api => PUT / product/:id  => replace object data to updated object data
exports.putUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(200).json(doc)
    }
    catch (error) {
        res.json(error)
    }
}

//update api => PATCH / product/:id  => only modify provided data 
exports.patchUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(doc)
    }
    catch (error) {
        res.json(error)
    }
    // console.log("---product", product)
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    const doc = await User.findByIdAndDelete(id)
    res.status(201).json("Deleted..")
}