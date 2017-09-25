const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', function (req, res) {
    res.redirect('/');
});
router.post('/add', function (req, res) {
    let page = Page.build({
        title: req.body.title,
        content: req.body.content
    });
    page.save().then(function(page) {
        res.redirect('/wiki/' + page.urlTitle);
    });
});
// router.post('/', function (req, res) {
//     res.send('submit a new page to db');
// });
router.get('/add', function (req, res) {
    res.render('addpage');
});
router.get('/:urlTitle', function (req, res, next) {
    Page.findOne({ where: {urlTitle: req.params.urlTitle} })
    .then(function (page) {
        res.render('wikipage', { page: page });
    })
    .catch(next);
});

module.exports = router;
