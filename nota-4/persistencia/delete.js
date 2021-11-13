/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  Nota #4
 * 
 * Nombre :  Mario Daniel Quispe Ancasi
 * Codigo :  20181529
 ******************************************/
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const cli = models.Cliente;

const elimina = async (llave) => {
    console.log("==> INicio de delete")

    return usr.destroy(
        {
            where : {
                id : llave
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro eliminado")
        console.log(resultado)
        return resultado
    })

    console.log("==> Fin de delete")
}

module.exports = elimina