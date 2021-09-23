/*Modificar la estructura del DOM*/
function agregar(){
    var valor=document.getElementById("lengpro").value;
    
    var radios =document.getElementsByTagName("tipo");
    var opcion = '';
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked ){
            opcion=radios[i].value;
        }
    }
}
/*Validar que se haya seleccionado algo */

