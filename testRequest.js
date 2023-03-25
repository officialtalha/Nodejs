const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        </body>
        <h1> This is a response from the Node js server again </h1>
        </body>
        </html>`);
        res.end();
    }

    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        </body>
        <h1> Welcome Home </h1>
        </body>
        </html>`);
        res.end();
    }
    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        </body>
        <h1> Welcome To About Us Page </h1>
        </body>
        </html>`);
        res.end();
    }

    if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        </body>
        <h1> Welcome To my Node JS Project </h1>
        </body>
        </html>`);
        res.end();
    }
    
});

server.listen(4000);