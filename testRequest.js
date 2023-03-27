const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
    console.log('In the first middleware.');
    next();
});

app.use((req, res, next) => {
    console.log('In the second middleware.');
    res.send({key1: 'value'});
});
const server = http.createServer(app);

server.listen(4000);