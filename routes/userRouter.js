let express = require('express');
let userController = require('../controllers/userController');
let router = express.Router();

router.get('/login' , userController.login);
router.get('/register' , userController.register);




module.exports = router;