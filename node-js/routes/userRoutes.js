
const express = require('express');

const userController=require('../controller/user')
const routes= express.Router()

// '/' this look like this '/product' because of we apply middleware on index.js file on routes
routes.get('/',userController.getUser )
.get('/:id',userController.getSingleUser )
.put('/:id', userController.putUser)
.patch('/:id', userController.patchUser)
.delete('/:id', userController.deleteUser)

exports.routes=routes
