/*Realizar la validación del formulario facilitado en el enunciado, cumpliendo los siguientes requisitos:

Programar el código de JavaScript en un fichero independiente. La única modificación que se permite realizar en el fichero .html es la de escribir la referencia al fichero de JavaScript.
Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a: "Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.
Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA.
Validar el campo FECHA utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELEFONO. Explicar las partes de la expresión regular mediante comentarios.
Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío.
 */

const NOMBRE = document.getElementById("nombre");
const APELLIDOS = document.getElementById("apellidos");
const EDAD = document.getElementById("edad");
const NIF = document.getElementById("nif");
const EMAIL = document.getElementById("email");
const PROVINCIA = document.getElementById("provincia");
const FECHA = document.getElementById("fecha");
const TELEFONO = document.getElementById("telefono");
const HORA_VISITA = document.getElementById("hora");
const ERRORES = document.getElementById("errores");
const INTENTOS = document.getElementById("intentos");


document.getElementById("enviar").addEventListener("click",validar,true);
let intentos = getCookie("intentos");
document.cookie = "intentos=" + intentos + ";";


function getCookie(miCookie) {
  let nom = miCookie + "=";
  let array = document.cookie.split(/;/g);

  for (var i = 0; i < array.length; i++) {
    var c = array[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(miCookie) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}


function validarNombreCompleto() {
  const regexNombre = /^(?=.{2,35}$)[A-Z][a-z]+(?: [A-Z][a-z]+)?$/;
  const regexApellidos = /^(?=.{1,35}$)[A-Z][a-z]+(\s?[A-Z][a-z]+)?$/;
  if (
    !regexNombre.test(NOMBRE.value) ||
    !regexApellidos.test(APELLIDOS.value)
  ) {
    if (!regexNombre.test(NOMBRE.value)) {
      if (NOMBRE.value.length > 35) {
        error(NOMBRE, "El nombre no puede tener más de 35 caracteres");
      } else { 
        error( NOMBRE, "El nombre es incorrecto. Tiene que empezar por mayúscula e ir seguido de minúsculas" );}
      NOMBRE.style.textTransform = "none"; 
      } else if ( !regexApellidos.test(APELLIDOS.value) && regexNombre.test(NOMBRE.value) ) {
      if (APELLIDOS.value.length > 50) {
        error(APELLIDOS, "Los apellidos no pueden tener más de 50 caracteres");
      } else { error( APELLIDOS, "Los apellidos son incorrectos. Tienen que empezar por mayúsculas e ir seguidos de minúsculas");}
 
      APELLIDOS.style.textTransform = "none";
      NOMBRE.style.textTransform = "uppercase";
    }
    return false;
  }

  if (regexNombre.test(NOMBRE.value)) {
    NOMBRE.style.textTransform = "uppercase";
  }

  if (regexApellidos.test(APELLIDOS.value)) {
    APELLIDOS.style.textTransform = "uppercase";
  }

  return true;
}


function validarEdad() {
  const regexEdad = /^([0-9]|[1-9][0-9]|10[0-5])$/;
  let edad = parseInt(EDAD.value);

  if (regexEdad.test(edad)) {
    return true;
  } else {
    if (edad < 0 || edad > 105) {
      error(EDAD, "La edad tiene que ser un número comprendido entre 0 y 105");
    } else {
      error(EDAD, "La edad tiene que ser un número");
    }
  }
}


function validarNif() {
  const regexNif = /^\d{8}-[a-zA-Z]$/; 
  /* "^" es el inicio de la regex, "\d{8}" son  exactamente 8 dígitos ya que "\d" indica que son números y el valor entre llaves ({}) es el número de dígitos,
   "-" representa al guión, "[a-zA-Z]" representa cualquier letra de la "a" a la "z" tanto en minúsculas o mayúsculas y "$" indica el final de la regex*/

  if (regexNif.test(NIF.value)) {
    return true;
  } else {
    error(NIF,"El NIF es incorrecto, debes de introducir 8 números, un guión y una letra");
    return false;
  }
}


function validarEmail() {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
  /* "^" indica el inicio de la regex,  "[\w-\.]+" en donde "\w" representa uno o más caracteres que pueden ser letras minúsculas o mayúsculas (a-z, A-Z) o números (0-9), 
  el guión (-)  representa a un guión y por el punto (.) que representa a un punto, por lo que ese grupo representa a cualquier caracter que sea una letra, un número, un guión o un punto.
   "@" es el carácter @, "([\w-]+\.)" representa uno o más grupos de caracteres que pueden ser letras (a-z, A-Z), números (0-9) o guiones (-), seguidos de un punto (.) 
   y "+" después del grupo de paréntesis indica que puede haber uno o más de estos grupos, "[\w-]{2,4}" coincide con entre 2 y 4 caracteres que pueden ser letras (a-z, A-Z), números (0-9) o guiones (-).
    Por último "$" indica el final de la regex.*/

  if (regexEmail.test(EMAIL.value)) {
    return true;
  } else {
    error(EMAIL, "El mail no es válido");
  }
}


function validarProvincias() {  
  switch (PROVINCIA.value) {
    case "C":
    case "LU":
    case "OU":
    case "PO":
      return true;
    case "0":
      error(PROVINCIA, "No has seleccionado la provincia");
      return false;
    default:
      error(PROVINCIA, "La provincia está mal seleccionada");
      return false;
      
  }
}


function validarFecha() {
   const regexFechaGuion = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
   const regexFechaBarra = /^\d{1,2}-\d{1,2}-\d{4}$/;

  if (regexFechaGuion.test(FECHA.value) || regexFechaBarra.test(FECHA.value)) {
    let divisor = regexFechaGuion.test(FECHA.value) ? "/" : "-"; // Usamos el operador elvis para decretar si la fecha es con "/" o con "-"
    let fechas = FECHA.value.split(divisor);

    if (parseInt(fechas[2]) !== new Date().getFullYear() - parseInt(EDAD.value)) {
      error(
        FECHA,
        "La edad: " + EDAD.value + ", no coincide con esta fecha de nacimiento: " + fechas[2]
      );
      return false;
    }

    if (
      parseInt(fechas[0]) < 1 ||
      parseInt(fechas[0]) > 31 ||
      parseInt(fechas[1]) < 1 ||
      parseInt(fechas[1]) > 12 ||
      parseInt(fechas[2]) < new Date().getFullYear() - 105 ||
      parseInt(fechas[2]) > new Date().getFullYear()
    ) {
      error(FECHA, "El formato de fecha está mal");
      return false;
    }
    return true;
  } else {
    error(
      FECHA, "La fecha debe tener el formato dd/mm/aaaa o el formato dd-mm-aaaa"
    );
    return false;
  }
}


function validarTelefono() {
  const regexTelefono = /[0-9]{9}/;

  if (regexTelefono.test(TELEFONO.value)) {
    return true;
  } else {
    error(TELEFONO, "El teléfono debe tener 9 números");
    return false;
  }
}


function validarHoraVisita() {
  const regexHora = /^([01][0-9]|2[0-3]):[0-5][0-9]$/; 
  /* "^" indica el inicio de la regex. "([01][0-9]|2[0-3])" indica que el primer número puede ser cualquiera que empiece por 0 o 1 
  ([01][0-9] -> 00-19) o (|) un número que empiece por 2 y sea seguido de cualquier número del 0 al 3 (2[0-3] -> 20-23). 
  Los ":" indican los dos puntos (:). Y por último "[0-5][0-9]" indica cualquier número que empiece con un número comprendido entre 0 y 5 ([0-5][0-9] -> 00-59) y "$" indica el final de la regex*/
  let resultado = regexHora.test(HORA_VISITA.value) ? true : false;

  if (resultado) {
    return true;
  } else {
    error(HORA_VISITA, "La hora no está en un formato de hh:mm");
    return false;
  }
}


function validar(e) {
  limpiarError();
  e.preventDefault();

  if (!intentos) {
    intentos = 1;
  } else {
    intentos++;
  }

  INTENTOS.innerHTML =
    "Número de intentos de envío del formulario: " + intentos;

  if (
    validarNombreCompleto() &&
    validarEdad() &&
    validarNif() &&
    validarEmail() &&
    validarProvincias() &&
    validarFecha() &&
    validarTelefono() &&
    validarHoraVisita() &&
    confirm("¿Quieres enviar el formulario?") 
  ) {
    return true;
  } else {
    return false;
  }
}


function error(elemento, mensaje) {
  elemento.className = "error";
  elemento.focus();

  ERRORES.className = "error";
  ERRORES.innerHTML = mensaje;
}


function limpiarError() {
  let formulario = document.forms[0];
  let mensajes = [ERRORES, INTENTOS];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < mensajes.length; j++) {
    mensajes[j].className = "";
    mensajes[j].innerHTML = "";
  }
}