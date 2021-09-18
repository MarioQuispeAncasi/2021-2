var cabecera = document.head;
console.log(cabecera);

var cuerpo = document.body;
console.log(cuerpo);

var lpAntiguo = document.getElementbyID("antiguo");
console.log(lpAntiguo);

var nodos = lpAntiguo.childNodes;
var aa = [];

for(var i=0;i<nodos.length;i++){
    if(nodos[i].nodeType === document.ELEMENT_NODE){
        aa.push(nodos[i].textContent)
    }
}

/*Lenguajes moderno*/ 
var lpModerno = document.getElementbyID("moderno");
console.log(lpModerno);

nodos = lpModerno.childNodes;
var am = [];

for(var i=0;i<nodos.length;i++){
    if(nodos[i].nodeType === document.ELEMENT_NODE){
        am.push(nodos[i].textContent)
    }
}

/*
var total = aa.concat(am);
document.getElementbyID("rpta2").innerHTML = total;*/

/*Cosas dificiles */

//No quiero eliminar y quiero agregar
/*
document.getElementbyID("rpta1").innerHTML =am;
am.splice(1,0,"Unlambda","Malburg");
document.getElementbyID("rpta2").innerHTML=am;*/

//Elinar y agregar a la vez
/*
document.getElementbyID("rpta1").innerHTML =am;
am.splice(3,1,"Ooak!","Unlambda","Malburg");
document.getElementbyID("rpta2").innerHTML=am;*/

//Quiero eliminar sin agregar
/*
document.getElementbyID("rpta1").innerHTML = am;
am.splice(3,2);
document.getElementbyID("rpta2").innerHTML= am;*/

//Puedo agregar al inicio
document.getElementbyID("rpta1").innerHTML =am;
am.unshift("Zimbu");
document.getElementbyID("rpta2").innerHTML=am;


//Puedo agregar al final
am.push("Zimbu2")
document.getElementbyID("rpta2").innerHTML=am;

//Colas y pilas
/*
document.getElementbyID("rpta1").innerHTML =am;
var x= am.pop();
document.getElementbyID("rpta2").innerHTML=am;
*/

document.getElementbyID("rpta1").innerHTML =am;
var x= am.shift();
document.getElementbyID("rpta2").innerHTML=am;

