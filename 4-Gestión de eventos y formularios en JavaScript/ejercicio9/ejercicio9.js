/*Simula la pantalla de creación de nuevo usuario de Amazon, utilizando las características de HTML5 y Javascript.:

Amazón crear usuario	

Utiliza LocalStorage para almacenar el nombre del usuario la primera vez que se registre, cuando vuelva a entrar deben de aparecer los datos ya colocados.

 */
  let nombre = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordConfirm = document.getElementById("passwordConfirm");
window.addEventListener("load", inicio, true);
function inicio() {

   if (localStorage.getItem("nombre") !== null) {
    nombre.value = localStorage.getItem("nombre");
   }
   if (localStorage.getItem("email") !== null) {
    email.value = localStorage.getItem("email");
   }
   if (localStorage.getItem("password") !== null) {
    password.value = localStorage.getItem("password");
    passwordConfirm.value = localStorage.getItem("passwordConfirm");
   }
    nombre.addEventListener("input", guardarValores, true);
    email.addEventListener("input", guardarValores, true);
    password.addEventListener("input", guardarValores, true);
    passwordConfirm.addEventListener("input", guardarValores, true);
    
      //Cada vez que el usuario cambia el valor de uno de estos campos, guardarValores guarda el nuevo valor en localStorage

  document.getElementById("enviar").addEventListener("click", validar, true);
}
function guardarValores() {
  localStorage.setItem("nombre", nombre.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  localStorage.setItem("passwordConfirm", passwordConfirm.value);
 }
function validaNombre(elemento) {
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      document.getElementById("errorNombre").innerHTML ="Este campo no puede estar vacio";
      elemento.className = "error";
    }
    if (elemento.validity.patternMismatch) {
      document.getElementById("errorNombre").innerHTML= "El nombre debe tener entre 1 y 50 caracteres";
      elemento.className = "error";
    }
        return false;
  }
      return true;
}
function validaEmail(elemento) {
   let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   let numberPattern = /^\d{9}$/;
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      document.getElementById("errorMail").innerHTML = "Este campo no puede estar vacio";
      elemento.className = "error";
      return false;
    }
    }
    if (emailPattern.test(elemento.value) || numberPattern.test(elemento.value)) {
       return true;
    }else {
       document.getElementById("errorMail").innerHTML =
         "Debe introducir un email o un telefono válido ";
       elemento.className = "error";
        return false;
    }      
  
}
function validaPassword(elemento,textID) {
   if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
        document.getElementById(textID).innerHTML = "Este campo no puede estar vacio";
        elemento.className = "error";
    }
    if(elemento.validity.tooShort){
           document.getElementById(textID).innerHTML = "Este campo debe tener al menos 6 caracteres";
           elemento.className = "error";      
    }
     return false;
 }
 return true;
}
function comprobarPasswords(elemento1, elemento2) {

if(elemento1.value===elemento2.value){
        return true;
}else  document.getElementById("errorPasswordConfirm").innerHTML ="Las contraseñas deben coincidir";
       return false;
}

function validar(e) {
    limpiarError();
    e.preventDefault();
  if (
    validaNombre(nombre) &&
    validaEmail(email) &&
    validaPassword(password, "errorPassword") &&
    validaPassword(passwordConfirm, "errorPasswordConfirm") &&
    comprobarPasswords(password, passwordConfirm) &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    if (typeof Storage !== "undefined") {
          guardarValores();
      } 
      else{
           alert("El navegador NO soporta WebStorage");         
      }
    return true;
  } else {
    return false;
  }

}

function limpiarError() {
  let formulario = document.forms[0];
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
   let errores = document.getElementsByClassName("textError");
   for (let i = 0; i < errores.length; i++) {
     errores[i].innerHTML = "";
  document.getElementsByClassName("textError").innerHTML="";
}
 
 }