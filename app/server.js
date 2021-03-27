

var express = require('express') 
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')
var mysql = require('../db/mysql');        
 
var port = process.env.PORT || 1339 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            
 

var router = require('./routes/inventario.js')
app.use('/api', router)


app.listen(port)
console.log('API escuchando en el puerto ' + port)


