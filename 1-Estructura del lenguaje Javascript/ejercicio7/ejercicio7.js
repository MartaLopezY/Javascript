/*Crea un control parental para que no se pueda entrar en una página.
Se pedirá al usuario que escriba el apellido del primer presidente de la democracia. (si no sabes quién fue, busca en Google)
Para guardar un valor del usuario utilizamos el siguiente código:
var respuesta = prompt (“Mensaje”);
Mientras el usuario no introduzca el valor correcto, el mensaje seguirá saliendo.
Comenta el código con los comentarios que estimes necesarios.
*/
let respuesta; 
 do{
      respuesta = prompt ("Introduce el apellido del primer presidente de la democracia");
      respuesta.toLowerCase();
 }while(comprobar(respuesta)==false);

function comprobar(nombre){
  
   if (nombre=="suarez"){
        window.alert("Tienes permiso para entrar");
        return true;
   }else {
      window.alert("No puedes entrar");
      return false;
}
}