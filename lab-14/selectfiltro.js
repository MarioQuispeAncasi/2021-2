//Select con filtro

const Sequelize = require ("sequelize");
const Op = Sequelize.Op;

const models = require("./models");
const usr = models.Usuario1;

const query1 = () =>{
    console.log("==>Inicio del query1");

    usr.findAll(
        {
            where: {
                edad: 21
            }
        }
    )
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
    console.log("==>Final de query1")
}

//Invocar la función
const invoca = setTimeout(query1,1000);
//2:02:54