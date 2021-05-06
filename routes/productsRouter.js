let express = require('express');
const productsController = require('../controllers/productsController');
let router = express.Router();
let multer = require('multer');
let path = require('path');

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname, '../public/images'))
    },
    filename: (req,file,callback) => {
        const newFileName = 'producto-' + Date.now() + path.extname(file.originalname);
        callback(null,newFileName);
    }
});

let fileUpload = multer({storage});


//gets
router.get('/product' ,productsController.show);
router.get('/crear', productsController.crear);
router.get('/edit/:id' ,productsController.edit);

//post
router.post('/crear' ,fileUpload.single('imagen') , productsController.save);

//put
router.put('/:id', fileUpload.single('imagen'),productsController.update);

//delete
router.delete('/delete/:id' , productsController.delete);



module.exports = router;