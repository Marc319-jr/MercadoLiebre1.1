const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
const puerto = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs');


//Declaraciones necesarias para poder utilziar POST
app.use(express.urlencoded ({extended:false}));
app.use(express.json());


//Declaraciones necesarias para PUT Y DELETE
const methodOverrider = require('method-override');
app.use(methodOverrider("_method"));

//declaracion de rutas
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/indexRouter');
const prodcutRouter = require('./routes/productsRouter');

//uso de rutas
app.use('/users' , userRouter);
app.use('/products', prodcutRouter);
app.use('/',indexRouter);




app.listen(puerto || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});