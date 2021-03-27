

const router = require('express').Router();


var comics = require('./comics');

router.use('/comics',comics);

module.exports = router;