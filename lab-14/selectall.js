/**Consulta isn filtros */
const models = require("./models");
const usr = models.Usuario1;

const query = () =>{
    console.log("==>Inicio del query");

    usr.findAll()
        .then((listado)=>{
            //Mostrar los datos
            listado.forEach(elem =>{
                jsonObject = elem.get({raw :true})
                console.log(jsonObject)
            })
        })
        .catch((error)=>{
            console.log("rror en el acceso a BD");
        })
    console.log("==>Final de query")
}

//Invocar la función
const invoca = setTimeout(query,1000);
