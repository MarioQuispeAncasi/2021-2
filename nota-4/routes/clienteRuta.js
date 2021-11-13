const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize")
const models = require("../models")

// Modulos de acceso a BD
//const query = require("../persistencia/selectall")
//const query1 = require("../persistencia/selectfiltro")
const inserta = require("../persistencia/insertarCliente");
//const elimina = require("../persistencia/delete");
//const actualiza = require("../persistencia/update")


const cliente = models.cliente;

const rutas = express.Router();

// Setear a express
rutas.use( express.urlencoded( {extended: true }) )
rutas.use( express.json() )

// La ruta para agregar
rutas.route("/agregar")
    .post( async(req,res,next) =>{

       await inserta(
                req.body.email,
                req.body.nombre,
                req.body.edad
            )
            .then( async () =>{
                await query()
                .then( (listado) => {
                    res.render('principal',{ p1: listado, layout: "../layouts/plantilla2"})
                } )
                .catch( (error) => {
                    console.log("Ocurrio un error en el query", error)
                })                
            })
            .catch( (error) => {
                console.log("Ocurrio un error en el insert", error)
            })

    })

// La ruta para eliminar un registro
rutas.route("/eliminar")
    .post( async (req,res,next) => {
        await elimina(
            req.body.id
        )
        .then( async () =>{
            await query()
            .then( (listado) => {
                res.render('principal',{ p1: listado, layout: "../layouts/plantilla2"})
            } )
            .catch( (error) => {
                console.log("Ocurrio un error en el query", error)
            })                
        })
        .catch( (error) => {
            console.log("Ocurrio un error en el delete", error)
        })

    })

    
// La ruta para editar
rutas.route("/editar")
    .post( async (req,res,next) => {
        // Debo ir a la BD a obtener la informacion
        // y mostrarla en un form
        await query1(
            req.body.id
        )
        .then( (reg) =>{
            res.render("editar", {p0: reg , layout: "../layouts/plantilla1"})
        })
        .catch( (error) =>{
            console.log("Error en query1 ", error)
        })

    })

// La ruta para actualizar
rutas.route("/actualizar")
    .post( async (req,res,next) => {
        // Debo actualizar la data en la BD
        // Mostrar la vista principal
        
        await actualiza(
            req.body.codigo,
            req.body.nombre,
            req.body.edad
            )
            .then( async () =>{
                await query()
                .then( (listado) => {
                    res.render('principal',{ p1: listado, layout: "../layouts/plantilla2"})
                } )
                .catch( (error) => {
                    console.log("Ocurrio un error en el query", error)
                })         
            })
            .catch( (error) => {
                console.log("error en actualiza ...")
            })
    })

// No olvidar
module.exports = rutas