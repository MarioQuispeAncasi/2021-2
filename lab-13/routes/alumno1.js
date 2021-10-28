// Instanciar a Express
const app = new express();

// Setear a express
app.use( express.urlencoded( {extended: true }) )
app.use( express.json() )

// Otra forma de leer los archivos estaticos
app.use( express.static( __dirname + '/public'))

//----- DEFINICION DE RUTAS
app.post('/alumno' , (req,res,next) => {
    res.end("Recibi un POST y obtuve " + req.body.codigo + " " + req.body.nombre);
}) 

app.get('/alumno' , (req,res,next) => {
    res.end("Recibi un GET y obtuve " + req.query.codigo + " " + req.query.nombre);
}) 

app.get('/alumno/:codigo/:nombre', (req,res,next) => {
    res.end("Recibi un GET v2 y obtuve " + req.params.codigo + " " + req.params.nombre);

})

app.put("/alumno", (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})

app.delete("/alumno", (req,res,next) => {
    res.statusCode = 405
    res.end("Metodo no implementado aun ...")
})
