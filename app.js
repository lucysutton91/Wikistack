const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.get('/', function (req, res) {
    res.render('index.html');
});
app.use(express.static('public'))