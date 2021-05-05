const controller = {
    show: (req,res) => {
        res.render('productInfo');
    },
    crear : (req,res) => {
        res.render('crear');
    }
}


module.exports = controller