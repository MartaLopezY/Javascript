/*Modifica el ejercicio anterior de la siguiente forma:
En primer lugar, se carga un prompt donde pregunta: “¿Cuál fue el primer presidente de la democracia española?”
En caso de que el usuario introduzca mal nombre y apellido, muestre como mensaje: “ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?”
En caso de que el usuario introduzca el nombre del presidente (solamente) el prompt muestre como mensaje “Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?”.
En caso de que el usuario introduzca el apellido del presidente (solamente) el prompt muestre como mensaje “Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?”.
Comenta el código con los comentarios que estimes necesarios.

*/

let respuesta;
do{
respuesta = prompt ("¿Cuál fue el primer presidente de la democracia española?");
respuesta.toLowerCase();
}while(comprobar(respuesta)==false);


function comprobar(nombre){
  
    if (nombre=="adolfo suarez"){
         window.alert("Tienes permiso para entrar");
         return true;
    }else if(nombre=="adolfo"){
         window.alert("Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?");
         return false;
    }else if(nombre=="suarez"){
         window.alert("Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?");
         return false;
    }else {
         window.alert("ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?");
         return false;
}
}
