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
