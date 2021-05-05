let express = require('express');
const productsController = require('../controllers/productsController');
let router = express.Router();



router.get('/product' ,productsController.show);
router.get('/crear', productsController.crear);



module.exports = router;