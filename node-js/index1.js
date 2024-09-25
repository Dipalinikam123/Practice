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
        // console.log("---id", +id)
        const product = products.find(e => e?.id === (+id));
        // if (!product) {
        //     res.writeHead(404, { "Content-Type": "text/plain" });
        //     res.end("Product not found");
        //     return;
        // }
        // const modifiedIndex = index
        //     .replace("Title", product.title)
        //     .replace("url", product.thumbnail)
        //     .replace("Description", product.description)
        //     .replace("price", product.price)
        //     .replace("rating", product.rating);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(product));
    }
    else if (req.url === '/api' && req.method === 'POST') {
        let body = ''; // Initialize body to collect chunks of data

        // Collect the incoming data chunks
        req.on('data', chunk => {
            console.log("---chunk received:", chunk.toString()); // Log each chunk
            body += chunk.toString(); // Accumulate the chunks
        });

        // Once all data has been received
        req.on('end', () => {
            console.log("---full body received:", body); // Log the full body
            const parsedData = JSON.parse(body); // Parse the body as JSON
            console.log("---parsed data:", parsedData); // Log the parsed data
            
            // Here you can process the data or store it
            // For now, we just send it back to the client as a response
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: 'Data received successfully',
                data: parsedData
            }));
        });
    }

    else {
        res.writeHead(404);
        res.end("404 Not Found..!");
    }
});

server.listen(4040, () => {
    console.log('Server is running on http://localhost:4040');
});
