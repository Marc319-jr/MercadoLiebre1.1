const fs = require('fs');
const { isRegExp } = require('util');
const controller = {
    index: (req,res) => {
        console.log("Renderisando al index");
        let archivoProductos = fs.readFileSync('products.JSON' , {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == "")
        {
        console.log("Leo de un archivo vacio")
        productos = [];
        }
        else
        {
        console.log("Leo de un archivo de productos");
        productos = JSON.parse(archivoProductos);
        }
        res.render('index' , {'productos' : productos})
    }
}



module.exports  = controller;