const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    const method = req.method;
    if (url === '/') { 
        const rf = fs.readFileSync('message.txt');
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        <body>
        <p>${rf}</p>
        <form action="/message" method="POST"> 
        <input type="text" id="input-field" name="message" required>
        <button>send</button>
        </form>
        </body>
        </html>`);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const msg = parseBody.split('=')[1];
            fs.writeFile('message.txt', msg, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <header>
        <title>response done!</title>
        </header>
        </body>
        <h1> Welcome To Message Page </h1>
        </body>
        </html>`);
    res.end();
});

server.listen(4000);