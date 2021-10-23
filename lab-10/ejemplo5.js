/**ejemplo de uso de http */
const { error } = require("console");
const http = require("http");
const url = require("url");
const port = process.env.port || 8086;

const server = http.createServer(function (req,res){
    console.log("El path solicitado es " + req.url)
    var path = req.url.split("?")[0]

    if(path =="texto"){
        responderTEXT(req,res)
    }
    if(path == "/html"){
        responderTEXT(req,res)
    }
    if(path=="/json"){
        responderJson(req,res)
    }
    error404(req,res)
});
server.listen(port);

console.log("Servidor iniciado en el puerto " + port);
console.log("Servidor iniciado en el puerto ${port}");


function responderTEXT(req,res){
    res.writeHead(200, {"Content-type": "application/json"})
    res.write(JSON.stringify({a:"Hola", b:"Mundo", c:"NodeJs"}))
    res.end()
}
function error404(req,res){
    res.writeHead(404, {"Content-type": "text/html"})
    //res.write("<h1>Hola Mundo NodeJs</h1>")
    res.end("<h1>Hola Mundo NodeJS</h1>");
}