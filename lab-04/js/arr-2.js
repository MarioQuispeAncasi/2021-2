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


var total = aa.concat(am);
document.getElementbyID("rpta2").innerHTML = total;