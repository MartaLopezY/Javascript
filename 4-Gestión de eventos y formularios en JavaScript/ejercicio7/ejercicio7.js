/*Crear un formulario que compruebe la información de los envíos de una empresa y validarlo por medio de expresiones regulares teniendo en cuenta lo siguiente:
Fecha de creación: obligatorio y con formato dd/mm/aaaa.
Empleado: será un nombre en clave formado por dos letras en mayúscula, un símbolo (algo que no sea ni letras ni números) y cuatro dígitos (ej. WW$1234)
Destinatario: estará formado por dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad  con la primera letra Mayúscula 
y el resto en minúsculas, dos puntos, y el código de distrito de 4 dígitos (ej. NM_Madrid:1234).
Peso en gramos: será un número del 100 al 5000.
Número de cuenta: Formato habitual de los números de cuenta con ( IBAN + 20 dígitos)
 */
window.addEventListener("load", inicio, true);
function inicio() {
  document.getElementById("enviar").addEventListener("click", validar, true);
}
function validaNombre(elemento, mensaje) {
  limpiarError();
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Este campo no puede estar vacio");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, mensaje);
    }
    
    return false;
  }
  return true;
}

function validaPeso() {
  var elemento = document.getElementById("peso");
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Este campo no puede estar vacio");
    }

    if (elemento.validity.rangeOverflow) {
      error(elemento, "El valor debe ser menor de 5000");
    }
    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El valor debe ser mayor o igual que 100");
    }
   
    return false;
  }
  return true;
}

function validar(e) {
  let fecha = document.getElementById("fecha");
  let empleado = document.getElementById("empleado");
  let destinatario = document.getElementById("destinatario");
  let cuenta = document.getElementById("cuenta");
  if (
    validaNombre(fecha,"El formato de fecha es dd/mm/aaaa") &&
    validaNombre(empleado, "El empleado debe tener 2 mayusculas, un simbolo y 4 números" ) &&
    validaNombre(destinatario, "El formato debe ser XX_Ciudad:0000") &&
    validaPeso() &&
    validaNombre(cuenta, "El numero de cuenta es 2 letras y 22 números") &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento, mensaje) {
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
}

function limpiarError() {
  let formulario = document.forms[0];
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
