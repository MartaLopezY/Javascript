/*Necesitamos un formulario con dos campos: en el primero se introduce los dígitos del NIF y 
en el segundo debería aparecer automáticamente, sin necesidad de hacer click en ningún botón, la letra correspondiente.
 */
let letra="TRWAGMYFPDXBNJZSQVHLCKE";
window.addEventListener("load", iniciar);

function iniciar() {
    document.getElementById("dni").addEventListener("input",validar,true);
}


function validar(){
     document.getElementById("error").innerHTML = ``;
     
  if (!document.getElementById("dni").checkValidity()) {
    if (!document.getElementById("dni").validity.patternMismatch) {
      document.getElementById("error").innerHTML = `Introduce un número de 8 cifras`;
    }
  }else{
  
    let dni = document.getElementById("dni").value;
    let posicion = parseInt(dni) % 23;
    document.getElementById("letra").setAttribute("value", letra.charAt(posicion));
  }

}