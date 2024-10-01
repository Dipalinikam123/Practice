const authController=require('../controller/auth')
const express = require('express');
const routes= express.Router()


routes.post('/signUp',authController.createUser )
routes.post('/login',authController.login )

exports.routes=routes
