/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  Nota #4
 * 
 * Nombre :  Mario Daniel Quispe Ancasi
 * Codigo :  20181529
 ******************************************/
const models = require("../models");
const cli = models.cliente;

exports.insertarCliente = async (em,nom,eda, prof) =>{
    console.log("==> Inciio de insertarCliente")

    return cliente.create(
        {
        email : em,
        nombre: nom,
        edad: eda,
        profesion: prof
    }).then((newCli)=>{
        console.log("Registro Insertado" + newCli)
    })
}

console.log ("Fin insert")
module.exports = insertarCliente;
