let express = require('express');
const productsController = require('../controllers/productsController');
let router = express.Router();



router.get('/product' ,productsController.show);



module.exports = router;