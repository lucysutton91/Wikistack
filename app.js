const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models');
const router = require('./routes/index.js');


const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.get('/', function (req, res) {
    res.render('index.html');
});
app.use(express.static('public'));

models.db.sync()
.then(function () {
    app.listen(3000, function () {
        console.log('server is listening on port 3000');
    });
})
.catch(console.error);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
