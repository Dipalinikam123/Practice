const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const products = data.products;

const server = http.createServer((req, res) => {
    console.log("---req", req.url)


    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2]
        const product = products.find(e => e?.id === (+id))
        console.log("--prd-", product)
        res.setHeader("content-type", "text/html")
            // replace method accept string 
            const modifyIndex = index.replace("Title", product?.title).replace("url", product?.thumbnail).replace("Description", product?.description).replace("price", product?.price).replace("rating", product?.rating)
            res.end(modifyIndex)
            return;
    }

    switch (req.url) {
        case '/':
            res.setHeader("content-type", "text/html")
            res.end(index)
            break;
        case '/api':
            res.setHeader("content-type", "application/json")
            res.end(JSON.stringify(data))
            break;
        // case '/product':
        //     res.setHeader("content-type","text/html")
        //     // replace method accept string 
        //     const modifyIndex = index.replace("Title", product?.title).replace("url", product?.thumbnail).replace("Description", product?.description).replace("price", product?.price).replace("rating", product?.rating)
        //     res.end(modifyIndex)
        //     break;
        default:
            res.writeHead(404)
            res.end()
            break;
    }

})
server.listen(4040)