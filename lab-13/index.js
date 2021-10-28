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
//Declarar express

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");//loguea de peticiones
const favicon = require("serve-favicon");//manejo de iconos
const session = require("express-session");//identificador hash unico por cada navegador conectado que permite identificar quien hace la peticio(prot http), almanenada en la memoria del servidor
const ejslayout = require("express-ejs-layouts");//generar contenido dinamico para despues ser rederizado

