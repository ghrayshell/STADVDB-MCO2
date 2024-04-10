const express = require('express');
const router = express.Router();

const indexRouter = require('./index.js');

router.use('/index', indexRouter);

module.exports = router;