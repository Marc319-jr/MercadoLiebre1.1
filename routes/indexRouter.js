let express = require('express');
const indexController = require('../controllers/indexContoller');
let router = express.Router();



router.get('/' , indexController.index);




module.exports = router;
