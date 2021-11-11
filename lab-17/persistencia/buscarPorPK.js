const models = require("../models");
const curso = models.Curso;
const alumno = models.Alumno;
const curso = require("../models/curso")

exports.findCursoByCodigo = async (cod) =>{
console.log("El codigo es ", cod)
return curso.findByPK( cod )
.then((c)=>{
    return c;
})
.catch ((err) =>{
    console.log ("Error al buscar Curso", err)
})
}