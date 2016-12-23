var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/spa');

/* Locations pages */
router.get('/', ctrlOthers.angularApp);

module.exports = router;
