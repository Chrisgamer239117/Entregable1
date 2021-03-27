

const mysql= require('../node_modules/mysql');

const conexion1=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'tienda1'
});
conexion1.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB1 is connected');
    }
});
module.exports=conexion1;
//------------------------------------------------------------
//------------------------------------------------------------
const conexion2=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'tienda2'
});
conexion2.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB2 is connected');
    }
});
module.exports=conexion2;
//------------------------------------------------------------
//------------------------------------------------------------
const conexion3=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'tienda3'
});
conexion3.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB3 is connected');
    }
});
module.exports=conexion3;