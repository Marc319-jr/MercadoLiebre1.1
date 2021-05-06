let fs = require('fs');
const controller = {
    show: (req,res) => {
        let id = req.query.id;
        console.log("Yendo a mostrar el producto numero " + id);
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
        let productoSend = productos[id-1];
        console.log("El producto a presentar es: ");
        console.log(productoSend);
        res.render('productInfo' , {'producto' : productoSend});
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
    },
    edit: (req,res) => {
        console.log("Estoy renderisando a la vista de editar un alumno");
        let id = req.params.id;
        console.log("Yendo a mostrar el producto numero " + id);
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
        let productoSend = productos[id-1];
        console.log("El producto a presentar es: ");
        console.log(productoSend);
        res.render('edit' , {'producto' : productoSend});

    },
    update : (req,res) => {
        console.log("Estoy editando un alumno");
        let id = req.params.id;
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
        productos[id-1].nombre = req.body.nombre;
        productos[id-1].precio = req.body.precio;
        productos[id-1].descuento = req.body.descuento;
        productos[id-1].imagen = req.file.filename;
        console.log("Termine de actualizar");
        let productosJSON = JSON.stringify(productos);
        fs.writeFileSync('products.JSON', productosJSON);
        res.redirect('/')

    },
    delete: (req,res) => {
        let id = req.params.id;
        console.log("Borrando al producto id: " + id );
        let archivoProductos = fs.readFileSync('products.JSON' , {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == "")
        {
            productos = [];
        }
        else
        {
            productos = JSON.parse(archivoProductos);
        }
        let nuevoArray = [];
        console.log(productos);
        console.log("creando nuevo array");
        for(let i = 0 ; i < productos.length; i++)
        {
            if(productos[i].id != id)
            {
                nuevoArray.push(productos[i])
            }
        }
        for(let i = 0;i<nuevoArray.length;i++)
        {
            nuevoArray[i].id = i+1;
        }
        console.log("El nueov array queda:");
        console.log(nuevoArray);
        let productsJSON = JSON.stringify(nuevoArray);
        fs.writeFileSync('products.json' , productsJSON);
        res.redirect('/')
    }

}


module.exports = controller