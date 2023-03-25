const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Talha is online');
});

server.listen(4000);