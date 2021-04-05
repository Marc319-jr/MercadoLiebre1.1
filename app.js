const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
const puerto = process.env.PORT;

app.use(express.static('public'));


app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/register' , (req,res) => 
{
    res.sendFile(path.join(__dirname , '/views/register.html'))
});

app.get('/login' , (req,res) => 
{
    res.sendFile(path.join(__dirname , '/views/login.html'))
})





app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});