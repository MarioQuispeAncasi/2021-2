/**Consulta isn filtros */
const models = require("../models");
const usr = models.Usuario;

const query = async () =>{
    console.log("==>Inicio del query");

    return usr.findAll()
        .then((listado)=>{
            //Mostrar los datos
            listado.forEach(elem =>{
                jsonObject = elem.get({raw :true})
                console.log(jsonObject)
            })
        })
        .catch((error)=>{
            console.log("error en el acceso a BD");
        })
    console.log("==>Final de query")
}

module.exports = query
