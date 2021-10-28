const http = require("http");

//Incorporar express 
const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = process.env.port || 3000;

//Instanciar a express
const app = new express();

//Setaer a express
app.use(express.urlencoded{extended: true})
app.use(express.json())

//Otra forma de leer los archivos estaticos
app.use(express.static( __dirname + '/public'))
app.post('/alumno',(req,res,next))


//....Definicion de rutas
app.post('/alumno',(req,res,next)=>{
    res.end("Recibi un POST y obtuve " + req.body.codigo +
    " "  +req.body.nombre)
})

app.get('/alumno',(req,res,next)=>{
    res.end("Recibi un GET y obtuve " + req.body.codigo +
    " "  +req.body.nombre)
})
//...Fin de defincion de rutas

//....definir rutas
//....La ruta de la welcome page
app.get("/", (req,res)=>{
    console.log(req.headers)

    res.statusCode=200;
    res.setHeader("Content-Type","text/html")
    res.end("<h1>Hola mundo NODEJS + EXPRESS</h1>")

})
//La ruta para el contenido estatico
app.get("/static/*",(req,res)=>{
    //aqui tenemos que leer el archivo desde el file system
    //http://localhost:3000/static/index,html
    const archivo = '${__dirname}/public/${req.params[0]}'
    fs.createReadStream(archivo)
    .on('error',()=>error404(req,res))
    .pipe(res)

})
//Definir el servidor
const server = http.createServer(app);

//Iniciar el servidor
server.listen(port, hostname,()=>{
    console.log("servidor iniciado en port ${port}..")
})
function error404(req,res){
    res.writeHead(404, {'Content-Type':'text/html'})
    res.write("<h2>El recurso que deseas no existe</h2>")
    res.end("<h3>Sorry........</h3>")
}