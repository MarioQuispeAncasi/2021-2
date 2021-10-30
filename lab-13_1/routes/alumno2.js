const express = require("express");
const ruta = express.Router();

// Setear a express
ruta.use( express.urlencoded( {extended: true }) );
ruta.use( express.json() );

ruta.route('/ejemplo1')
.get((req,res,next) =>{
    res.render('welcome1')
})

//No olvidar exportar 
module.exports = ruta;
