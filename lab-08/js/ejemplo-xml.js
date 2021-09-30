var btnSolicitar = document.getElementById("btnSolicitar");
var btnMostrar = document.getElementById("btnMostrar");

btnSolicitar.addEventListener("cahrge", cargar);
btnMostrar.addEventListener("click", mostrar);

var reader = new FileReader();

function cargar(event){
    var f = event.target.files[0];
    //Validar el tipo de archivo
    if(f.type.indexOf("xml") === -1){
        alert("El tipo del archivo no puede procesarse !!");
        return;
    }
    var reader = new FileReader();
    //Evento asociado
    reader.onloadstart =function(event){
        console.log("on loadstart....");
    } //empieza la carga
    reader.onprogress = function(event){
        console.log("en progreso....");
    }
    reader.onloads = function(event){
        contenido = reader.result;
        console.log("en load " + contenido);
        //cuando se leyo todo el contenido del archuvo
    }

    reader.onload = function(event){
        console.log("en onload...");
    }
    reader.onerror = function(event){
        console.log("OCURRIO ERRROR" + this.result.error);
    }
}

//Indicar la lectura
reader.readAsText(F);

function mostrar(){
    var pasrser = new DOMParser();

    //Convertir la cadena a xml
    var cadenaXML= parser.parseFromString(contenido, "text/xml");

    //Ahora hay que mostrar
    var parrafo = document.createElement("p");
    var titulo =document.createElement("h1");
    var imagen = document.createElement("img");

    //Asignar valor a cada nodo
    titulo.Id ="superheroe";
    titulo.textContent = cadenaXML.getElementByTagName("descripcion")[0].childNodes[0].nodeValue;

    imgane.src = cadenaXML.getElementByTagName("Imagen")[0].childNodes[0].nodeValue;

    //Agregar al DOM
    document.getElementById("contenido").appendChild(titulo);
    document.getElementById("contenido").appendChild(imagen);
    document.getElementById("contenido").appendChild(parrafo);


}