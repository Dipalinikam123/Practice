// const app = require('./app')

// console.log(app.x,app.y)

// console.log("hello node")

// Basic Server
 const http= require('http')

 http.createServer((req,res)=>{
    res.write("Hello Node Js")
    res.end()
 }).listen(4500)
 
// --------------------------------------------------------------
  
