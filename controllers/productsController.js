let fs = require('fs');
const controller = {
    show: (req,res) => {
        res.render('productInfo');
    },
    crear : (req,res) => {
        console.log("Me voy a crear un producto")
        res.render('crear');
    },
    save: (req,res) => {
        console.log("Guardando un producto");
        let archivoProductos = fs.readFileSync('products.JSON' , {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == "")
        {
            productos = [];
            console.log("Adicionando un producto a un array vacio");
        }
        else
        {
            productos = JSON.parse(archivoProductos);
            console.log("Adicionando un producto a un array que ya contiene algo");
        }
        console.log("El producto que voy a crear contiene la siguiente info:")
        console.log(req.body);
        let producto = {
            id : productos.length+1,
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento : req.body.descuento,
            imagen : req.file.filename
        };
        console.log(producto);
        productos.push(producto);
        let productosJSON = JSON.stringify(productos);
        fs.writeFileSync('products.JSON', productosJSON);
        res.redirect('/')
    }
}


module.exports = controller