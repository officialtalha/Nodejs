const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));



app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
            <input type="text" name="product">
            <input type="text" name="quantity">
            <button type="submit"> Add Product </button>
            </form>`);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send(`<h1>Home Page Express JS</h1>`);
});


app.listen(4000, () => {
    console.log('server listening on port 4000');
});