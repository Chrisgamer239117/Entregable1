



const {json}=require('body-parser');//me ayudaron aqui ;) //porque soy solito :( 
let mysql = require('../../db/mysql')
let vec=[];
module.exports = {
    list:(req,res)=>{
        vec=[]
        mysql.conexion1.query(`SELECT * FROM inventario`,(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })
    
    
        mysql.conexion2.query(`SELECT * FROM inventario`,(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })

        mysql.conexion3.query(`SELECT * FROM inventario`,(err,rows,fields)=>{
        if(!err)
        {
            valor(rows)
            res.json(vec);
        }
        else
        {
            res.json(err);
        }
            
        })
        vec=[]
        console.log(vec);
    }    
}
function valor(x){
    let i=vec.length
    vec[i]=x
    console.log(vec);
}
//pero no me logro funcionar no se si la ruta está mal porque soy mongolito
//i'm so lonely
//F 
//https://www.youtube.com/channel/UC6ASGTC5jCU4oHacGstEsIA 
//Suscribase a mi canal 