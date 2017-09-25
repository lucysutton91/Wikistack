const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

function urlGenerator(pageTitle) {
    pageTitle.replace(" ", "_");
    let newPageTitle = "";
    for (let i = 0; i < pageTitle.length; i++) {
        if (pageTitle[i] == RegExp("^[a-zA-Z0-9_]*$")) {
            newPageTitle += pageTitle[i];
        }
    }
    return newPageTitle;
}

router.get('/', function (req, res) {
    res.redirect('/');
});
router.post('/add', function (req, res) {
    let page = Page.build({
        title: req.body.title,
        content: req.body.content
        // urlTitle: req.body.urlTitle
    });
    page.save();
    res.redirect('/');
});
// router.post('/', function (req, res) {
//     res.send('submit a new page to db');
// });
router.get('/add', function (req, res) {
    res.render('addpage');
});

module.exports = router;