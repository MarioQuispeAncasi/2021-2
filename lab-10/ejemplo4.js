/**ejemplo de uso de http */
const http = require("http");
const port = process.env.port || 8086;

const server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-type": "text/html"})
    //res.write("<h1>Hola Mundo NodeJs</h1>")
    res.end("<h1>Hola Mundo NodeJS</h1>");
});
/*server.listen(port);

console.log("Servidor iniciado en el puerto " + port);
console.log("Servidor iniciado en el puerto ${port}");
*/