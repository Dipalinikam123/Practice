const express = require('express');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoute')
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const fs= require('fs')
const publicKey= fs.readFileSync('E:/ReactPractice/Practice/node-js/public.key')


const PORT = process.env.PORT || 3000; // Use the PORT variable from .env
const server = express(); //define only one time at root file
// server.use is used to apply middleware

const auth=((req, res, next) => {
  //to get header info in req  
  // console.log("---header--", header)
  try {
    const token = req.get('Authorization').split('Bearer ')[1]
    const decoded = jwt.verify(token,publicKey);
    console.log("--decode-", decoded)
    if (decoded.email) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (error) {
    res.sendStatus(401)
  }
})
// body parser
server.use(express.json()); // These middleware functions allow you to access data from the request body in a readable format.
server.use(cors())
server.use('/auth',authRoutes.routes)
server.use('/products',auth,productRoutes.routes) // after this api url is like this= http://localhost:4001/products,  --- you can add multile route like /api/v1/
server.use('/users',auth,userRoutes.routes)

const dbUrl = process.env.DATABASE_URL
main().catch(err => console.log(err));
async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database Connected...");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}





// api root or base url = http://localhost:4001 

//rest api look like this but we need to organise this using MVC pattern 
// routes.post('/products',createProduct=(req, res) => {
//     console.log('---body', req.body)
//     products.push(req.body)
//     res.json(req.body)
// })

// -----controller = createProduct=(req, res) => {
//     console.log('---body', req.body)
//     products.push(req.body)
//     res.json(req.body)
// }
// ----routes= this part move to routes folder=('/products',productController.createProduct )

// use MVC pattern=  Model View Controller
// 1.Model: Represents the data and business logic of the application. In a Node.js context, models often interact with databases (like MongoDB or SQL) to perform CRUD operations.

// 2.View: The user interface of the application. This component is responsible for presenting data to the user. In a Node.js application, views can be created using templating engines like EJS, Pug, or Handlebars.

// 3.Controller: Acts as an intermediary between the Model and View. Controllers handle user input, update the model, and return the appropriate view. They contain the logic that processes requests and responses.

// flow= User Action  → 2. Route Match → 3. Controller Action → 4. Model Interaction → 5. Data Processing → 6. View Rendering → 7. Response Sent → 8. User Interaction Again


server.listen(PORT, () => {
  console.log('server started...')
})