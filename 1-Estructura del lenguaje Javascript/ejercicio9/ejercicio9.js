//Modifica el programa 4 que utilizaba ifelse para que realice la misma operación pero utilizando un switch


let edad= prompt ("Introduce la edad:");
let tipo;
if(edad<0){
    tipo=0;
}else if(edad>0 && edad<12){
    tipo=1;
}else if(edad>12 && edad<26){
    tipo=2;
}else if(edad>26 && edad<60){
    tipo=3;
}else tipo=4;
switch(tipo){
case 0:  
    window.alert("Has introducido un número negativo");
    break;
case 1:  
    window.alert("Niño");
    break;
case 2: 
    window.alert("Joven");
    break;
case 3:
    window.alert("Adulto");
    break;
case 4:
    window.alert("Jubilado");
    break;
}