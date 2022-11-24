const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 4500;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// routing start now

app.get('/', (req, res) => {
    res.render('dashboard');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/milk-product', (req, res) => {
    res.render('product');
});

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log('server is running on port http://localhost:4500');
    }
});
