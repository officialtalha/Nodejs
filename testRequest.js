const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
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
});

server.listen(4000);