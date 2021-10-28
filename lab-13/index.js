const http = require('http')

const hostname = 'localhost'

/*las reglas:
1. Incluidr modulos y dependencias
2. Configurar express con el motor de plantillas
3. Definir los middlewares
4. Definir las rutas
5. Conectar a bd
6. Inciar al app/ servidor
*/
//Declarar los modulos y dependencias

//modulos
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");//loguea de peticiones
const favicon = require("serve-favicon");//manejo de iconos
const session = require("express-session");//identificador hash unico por cada navegador conectado que permite identificar quien hace la peticio(prot http), almanenada en la memoria del servidor
const ejslayout = require("express-ejs-layouts");//generar contenido dinamico para despues ser rederizado

//dependencias

const r1 = require("./routes/alumno1.js");

//Declarar y configurar express

const app = express();
app.set('port', process.env.port || 5000);
app.set('env','development'); //entornos: test, stage, production, preview 


//Motor de plantillas (que soporta expres)
    //basado en ejslayout (trabajemos con embemd javscrip)
app.set('view cache', "false"); //para que no haya mem cache
app.set("view engine", "ejs"); //definir el motor de busquedas
app.set("views",__dirname + "/views");
app.set("layout", "../layout/´plantilla1");
/*la vista es la data que será insertada dentro 
de la plantilla o layout*/

//Definir los middleware, se ejecutan en orden
app.use(ejslayout);
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(morgan("combined"));//cuandos e hace una peticion se botan datos, registran los datos
app.use(cookieParser());
app.use(session({
    secret: "frase clave",
    reseave: false,
    cookie: {secure: false}
})) 
app.use(express.static(__dirname + "/public"));//contenido estatico

//La aplicacion debe estar en....
//Van las rutas ..esto va cambiar
    //Esta parte la hizo el alumno 1
app.use("/login", r1);

    //Esta parte la hzio el alumno 2

//Esta pate la hizo el alumno 1

//instanciar el server
const server = http.createServer(app);
server.listen(app.get("port"), hostname,()=>{
    console.log(`Servidor iniciado en puerto ... ${app.get('port')}`);})
