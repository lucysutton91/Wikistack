const express = require('express');
const router = express.Router();
const wiki = require('./wiki.js');
const user = require('./user.js');

module.exports = router;

router.use('/wiki/', wiki);
router.use('/user/', user);
