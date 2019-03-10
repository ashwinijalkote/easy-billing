const express = require( 'express')

const mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://mongouser:mongopasswd@cluster0-ybka4.mongodb.net/easy-billing?retryWrites=true');

var users= require('./routes/users');
const app = new express();


let allowCors = (req, res, next) => {
    res.header("Access-Control-Allow-Headers" , "*");
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Methods" , "GET,HEAD,PATCH,PUT");
    next();
};

app.use('/users', [bodyParser.json(), allowCors], users);
app.listen(3000);
