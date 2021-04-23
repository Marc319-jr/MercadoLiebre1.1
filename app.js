const server =  3000;
const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
app.use(express.static('public'));
app.set('view engine', 'ejs');



//declaracion de rutas
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/indexRouter');

//uso de rutas
app.use('/users' , userRouter);
app.use('/',indexRouter);




app.listen(server , () => console.log("levantando un servidor"));