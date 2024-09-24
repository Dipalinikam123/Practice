const http = require('http');
const fs = require('fs');

// Read the HTML and JSON files
const index = fs.readFileSync('./public/index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'));
const products = data.products;

const server = http.createServer((req, res) => {
    console.log("---req", req.url);

    // Serve the main page
    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>Welcome</h1>');
    }
    else if (req.url === '/api') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }
    else if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2];
        const product = products.find(e => e?.id === (+id));

        if (!product) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Product not found");
            return;
        }
        const modifiedIndex = index
            .replace("Title", product.title)
            .replace("url", product.thumbnail)
            .replace("Description", product.description)
            .replace("price", product.price)
            .replace("rating", product.rating);

        res.setHeader("Content-Type", "text/html");
        res.end(modifiedIndex);
    }
    // else if (req.method === 'POST' && req.url === '/products') {
    //     console.log("---requst", req)
    //     res.setHeader("Content-Type", "text/html");
    //     // res.end('products here')
    // }
    else {
        res.writeHead(404);
        res.end("404 Not Found..!");
    }
});

server.listen(4040, () => {
    console.log('Server is running on http://localhost:4040');
});
