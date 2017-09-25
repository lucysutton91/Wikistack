const express = require('express');
const router = express.Router();
const wiki = require('./wiki.js');
const user = require('./user.js');
const models = require('../models');
const Page = models.Page;
const User = models.User;

module.exports = router;

router.use('/wiki/', wiki);
router.use('/user/', user);

router.get('/', function(req, res) {
    
});