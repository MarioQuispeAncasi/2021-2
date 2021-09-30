function mostrarReloj(){
    var fechahora=new Date();
    var horas = fechahora.getHours();
    var minutos = fechahora.getMinutes();
    var minutos = fechahora.getMinutes();
    var segundos = fechahora.getSeconds();
    var ampm = "A.M.";
    if(horas>12){
        ampm="P.M.";
        horas = horas - 12;
    }
    if(horas<10){
        horas = '0' + horas;

    }
    if(minutos<10){
        minutos = '0' + minutos;
    }
    if(segundos<10){
        segundos ='0' + segundos;
    }
    var cad=horas + ":" + minutos + ":" + segundos + " " + ampm;
    document.getElementById("reloj").innerHTML = cad;

}
mostrarReloj();


function iniciar(e){
    fid = setInterval(mostrarReloj,1000)//valor expresado en milisegundos
    //ejecutar una vez set out o algo asi xd 
}
function detener(e){
    clearInterval(fid)//detener el reloj
}

/**Main  program
 */
var botonI= document.getElementById("btnIniciar");
var botonD= docuemnt.getElementById("btnDetener");
var fid;

//asociar handlers a eventos
botonI.addEventListener("click", function(e){
    iniciar(e);

})
botonD.addEventListener("click",function(e){
    detener(e);
})//ejecutar una funcion