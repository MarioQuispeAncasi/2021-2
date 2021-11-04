const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const models = require("../models");

//Modulos de acceso a base de datos
const query = require("../persistencia/selectall");

const usuario = models.Usuario;


const rutas = express.Router();

//Ruta de inicio o welcome page
rutas.route("/")
    .get((req,res,next)=>{
        res.render("inicio",{layout:"../layouts/plantilla1"})
    })
    //para que esto funcione se necesita exportar
    //No olvidar

    //La ruta princiapl (2da ruta) mostar vista
    rutas.route("/principal")
        .get(async (req,res,next) =>{
            //Aqui debo leer la base de datos
            //y mostar los datos en la vista 
            //principal. Voy a usar la plantilla 2
            await query()
                .then( (listado) =>{
                    res.render('principal',{
                        p1:listado,
                        layout:"../layouts/plantilla2"
                    })
                } )
        })

        module.exports = rutas