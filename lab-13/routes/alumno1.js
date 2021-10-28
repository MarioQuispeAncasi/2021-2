// Instanciar a Express
const express = require("express");
const ruta = new express.Router();


// Setear a express
ruta.use( express.urlencoded( {extended: true }) )
ruta.use( express.json() )

// Otra forma de leer los archivos estaticos
ruta.use( express.static( __dirname + '/public'))

//----- DEFINICION DE RUTAS
ruta.route('/')
    .post( (req,res,next) => {
    res.end("Recibi un POST y obtuve " + req.body.codigo + " " + req.body.nombre);
}) 

ruta.route('/')
    .get( (req,res,next) => {
    res.end("Recibi un GET y obtuve " + req.query.codigo + " " + req.query.nombre);
}) 

ruta.route('/:codigo/:nombre')
    .get( (req,res,next) => {
    res.end("Recibi un GET v2 y obtuve " + req.params.codigo + " " + req.params.nombre);

})

ruta.route("/")
    .put( (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})

ruta.route("/")
.delete( (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})


//No olvidar que hay que exportar
module.exports = ruta;