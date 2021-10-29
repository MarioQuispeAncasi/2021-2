/*const http = require('http')

const hostname = 'localhost'

/*las reglas:
1. Incluidr modulos y dependencias
2. Configurar express con el motor de plantillas
3. Definir los middlewares
4. Definir las rutas
5. Conectar a bd
6. Inciar al app/ servidor

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
de la plantilla o layout

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
*/
const http = require('http')

const hostname = 'localhost'

/*
La reglas:
1. Incluir modulos y depencias
2. COnfigurar express con el motor de plantillas
3. Definir los middleware
4. Definicion de rutas
5. COnectar a BD
6. Iniciar al app / servidor
*/

//Modulos
const express = require("express");
const bodyParser = require("body-parser");
//Definir cookies, las aplicaciones pueden generar cookies
const cookieParser = require("cookie-parser");
//modulo para logueo de peticiones
const morgan = require("morgan");
//manejo de iconos
const favicon = require("serve-favicon");
/*identificador hash unico por cada navegador 
conectado que permite identificar quien hace la 
peticion(prot http), almanenada en la memoria del 
servidor o e la app. Se recomenda que los objetos
que se guardan en la sesion no sean muy granddres
con el fin de que no se sature el servidor*/
const session = require("express-session");
/*generar contenido dinamico para despues 
ser rederizado
motor de plantillas: parte de express que nos
permite contenido dinámico. SOn como plantillas que
tienen cierta estructura, la cual solo vamos a
completar las aprtes de manera dinámica y todo eso
se va a enviar al navegador para ser renderizado*/
const ejsLayout = require("express-ejs-layouts");


// Dependencias
const r1 = require("./routes/alumno1.js");
const r2 = require("./routes/alumno2.js");

// instanciar Express
const app = express();
    //Setear el valor del puerto
app.set('port', process.env.port || 3000);
    /*indicar el entorno 
    test stage preview production*/
app.set('env','development'); 

// Motor de plantillas
/*VISTA: DATA QUE ES INSERTADA DENTRO DE LA PLATILLA
    O LAYOUT O TEMPLATE*/
/**Basado en const ejsLayout = 
    require("express-ejs-layouts"); 
   ejs: embeded javascrip*/
   /**que no haya cachee en las vistas 
        es decir cada peticion que hagamos hacia la 
        aplicacion la vista se vuelva a leer del 
        disco
   */
app.set('view cache', "false");
/**Definir engine: 
 * ejs lo va buscar en el modulo
 * const ejsLayout = 
    require("express-ejs-layouts"); 
*/
app.set("view engine", "ejs");
/*Directorio views
    dar el valor: directorio a la carpeta views*/
app.set("views",__dirname + "/views");
/*Dar el valor del layout por defecto
    poner la ubicación del archivo */
app.set("layout","../layouts/plantilla1");


// Middleware
app.use(ejsLayout);
//iconito en la pestaña del navegador
app.use( favicon( __dirname + "/public/favicon.ico") );

app.use( morgan("combined") );

app.use( cookieParser() );
app.use( session( {
    secret : "frase clave",
    resave : false,
    cookie : { secure: false }
}))

app.use( express.static( __dirname + "/public"));

// La aplicacion debe estar en ...
//Van las rutas (solo va cambiar esta parte)
// Esta parte la hizo el alumno 1
app.use("/login", r1);
// Esta parte la hizo el alumno 2
app.use("/plantillas",r2);


// Instanciar el server
    //pasar como apremtro express(app
const server = http.createServer(app);
server.listen( app.get('port') , hostname , () => {
    console.log(`Servidor iniciado en puerto ... ${app.get('port')}`);

})

