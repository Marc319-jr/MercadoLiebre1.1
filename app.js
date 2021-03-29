const server =  3000;
const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');

app.use(express.static('public'));


app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/test' , (req,res) => {
    res.sendFile(path.join(__dirname ,'/views/test.html'))
});



app.listen(server , () => console.log("levantando un servidor"));