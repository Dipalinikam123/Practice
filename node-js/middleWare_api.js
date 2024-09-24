const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

// const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'))
const products = data.products;



const server = express();
// -------------------------- thid-party middleware -----------------------------
server.use(morgan('combined'))

// middleware syntax
//  types of middleware 
// 1. aplication level-middleware = apply on all server ,The function is executed every time the app receives a request.
// 2.router-level-middleware => apply on perticular route, 3.Error-handling middleware 4.Built-in middleware 5.Third-party middleware
// ** it's logger middleware and application level middleware=A logger is a tool that records information about what's happening in a program, such as errors, requests, or system events. It helps developers monitor and debug the application by keeping track of important actions and issues.

// server.use((req, res, next) => {
//    // req.get(field) is Returns the specified HTTP request header field (case-insensitive match). The Referrer and Referer fields are interchangeable.
//    console.log(req.ip, req.hostname, req.method, new Date(), req.get('user-agent'))
//    next()
// })



// -----------------------------------router-level-middleware-------------------------------------

// router-level-middleware
// query => ?password=123
const auth = (req, res, next) => {
   console.log("---query", req.query)
   if (req.query.password === '123') {
      next()
   } else {
      res.sendStatus(401)
   }
}
// server.use(auth) apply on all route

// ---------------------------------------Built-in middleware-------------------------------------
// req.body =>In Express, req.body is used to access the data that is sent by the client in the body of an HTTP request, typically for            POST, PUT,or PATCH requests.
// --- To get body => use Built-in middleware => express.json

//it used to called as bodyParser
server.use(express.json()) // read req.body in json format
//to test in postman put data in body => raw, json format, not in params or in query
const auth2 = (req, res, next) => {
   console.log("---query", req.body)
   if (req.body.password === '123') {
      next()
   } else {
      res.sendStatus(401)
   }
}

//express static 
// => in Express, the static middleware is used to serve static files, such as HTML, CSS, JavaScript, images, and other assets, directly from a specified directory on the server.his middleware simplifies the process of serving these files without the need for custom route handlers for each asset.
// server.use(express.static('public'))


// test this on postman because all have same route
// this is called as Api- endpoint- route
server.get('/', auth, (req, res) => { // apply on single route
   res.json({ type: 'GET' })
})
server.get('/product/:id', (req, res) => { // apply on single route
   console.log("---id", req.params)
   res.json({ type: 'GET' })
})
server.post('/', auth2, (req, res) => {
   res.json({ type: 'POST' })
})
server.delete('/', (req, res) => {
   res.json({ type: 'DELETE' })
})
server.put('/', (req, res) => {
   res.json({ type: 'PUT' })
})
server.patch('/', (req, res) => {
   res.json({ type: 'PATCH' })
})


server.get('/demo', (req, res) => {
   // res.send("<h1>hello express</h1>")
   // res.sendFile('E:/ReactPractice/Practice/node-js/index.html')
   // res.json(data)
   // res.sendStatus(404)
   // res.status(201).send('<h1>Hello</h1>')
})


server.listen(4000, () => {
   console.log("Server Started...")
})