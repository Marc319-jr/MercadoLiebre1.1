const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
const puerto = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs');


//declaracion de rutas
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/indexRouter');

//uso de rutas
app.use('/users' , userRouter);
app.use('/',indexRouter);




app.listen(puerto || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});