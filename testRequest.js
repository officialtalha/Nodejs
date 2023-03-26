const express = require('express');

const app = express();

app.use('/sale',(req, res, next) => {
    console.log('first middleware');
    res.send('<h1>Sale page!</h1>');
    next();
});


app.use('/product',(req, res, next) => {
    console.log('second middleware');
    res.send('<h1>Product page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('third middleware');
    res.send('<h1>Home page!</h1>');
    // next();
});



app.listen(4000, () => {
    console.log('server listening on port 4000');
});