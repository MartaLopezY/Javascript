/*Prepara un formulario diseñado para introducir los datos de los discos con los que trabajamos la U4. 
Recuerda qué elementos se almacenaban, y elije el componente de formulario más adecuado:
Nombre del disco.
Grupo de música o cantante.
Año de publicación.
Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
Localización: almacenará un número de estantería.
Prestado: almacenará un valor booleano. Por defecto será false.
Realiza las funciones necesarias para validarlo con Javascript teniendo en cuenta:
Nombre del disco: máximo 20 caracteres, obligatorio.
Grupo de música o cantante: máximo 20 caracteres, obligatorio.
Año de publicación: 4 caracteres numéricos.
Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”): sin comprobación.
Localización: almacenará un número de estantería: vacío o numérico.
Prestado: sin comprobación.
 Tendrás que tener en cuenta, además:
Que los campos nombre del disco y grupo de música se validarán en la misma función.
En caso de que se produzca un error en la validación, el campo implicado tenga el reborde rojo, y la etiqueta que lo acompaña también aparezca de color rojo.
Para ello deberás crear las clases css necesarias (puedes incluirlas en el propio html si lo deseas) para que se visualice correctamente.
Ten en cuenta que si el usuario mete correctamente el nombre, deberá volver a su color habitual.
 */

window.addEventListener("load", inicio, true);
function inicio() {
  document.getElementById("enviar").addEventListener("click", validar, true);
}

function validaNombre(elemento, textoElemento) {
  limpiarError(textoElemento);
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, textoElemento, "Este campo no puede estar vacio");
    }
    if (elemento.validity.patternMismatch) {
      error(elemento, textoElemento, "Debe tener un máximo de 20 caracteres");
    }
    return false;
  }
  return true;
}

function validaPublicacion() {
  let elemento = document.getElementById("publicacion");
  let textoElemento = document.getElementById("textPublicación");
  limpiarError(textoElemento);
  if (!elemento.checkValidity()) {

    if (elemento.validity.patternMismatch) {
      error(elemento, textoElemento, "Debe ser un número de 4 cifras");
    }

    return false;
  }
  return true;
}
function validaLocalizacion() {
  let elemento = document.getElementById("localizacion");
  let textoElemento = document.getElementById("textLocalizacion");
  limpiarError(textoElemento);
  if (!elemento.checkValidity()) {
    if (elemento.validity.patternMismatch) {
      error(elemento, textoElemento, "Debe ser un campo numérico");
    }
    return false;
  }
  return true;
}

function validar(e) {
  let nombre = document.getElementById("nombre");
  let textNombre = document.getElementById("textNombre");
  let cantante = document.getElementById("cantante");
  let textCantante = document.getElementById("textCantante");
  if (
    validaNombre(nombre, textNombre) &&
    validaNombre(cantante, textCantante) &&
    validaPublicacion() &&
    validaLocalizacion() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento, textoElemento, mensaje) {
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  textoElemento.className = "texterror";
}

function limpiarError(textoElemento) {
  let formulario = document.forms[0];
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
  textoElemento.className = "";
}
