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

const actualiza = async (em, nom, eda) => {

    return usr.update(
        {
            nombre : nom,
            edad : eda
        },
        {
            where : {
                email: em
            }
        }
    )
    .then( (resultado) => {
        console.log(resultado)
    })
}
 
module.exports = actualiza