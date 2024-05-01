/*Crea un formulario con un pequeño test sobre una temática que tu cedidas. El test tendrá 4 preguntas con 3 respuestas cada una a elegir con radio buttons.
El programa deberá hacer lo siguiente:
Cuando el usuario conteste las 4 preguntas y envíe los datos obtendrá el resultado final (“Has acertado x preguntas”)
Además, el usuario podrá ver qué preguntas ha fallado, ya que al enviar el formulario le aparecerá un pequeño icono con un tick verde en las preguntas correctas y una cruz roja en las preguntas incorrectas.
En caso de que el usuario deje alguna pregunta sin contestar, no mostrará el resultado e indicará con un mensaje "No has respondido a todas las preguntas". Y se marcará en color rojo la pregunta que no haya sido respondida.

 */
let aciertos = 0;
const correctas = ["a", "b", "c", "b"];
let respuestas = [];
let comprobacion = [false, false, false, false];
const preguntas = ["guerraMund", "colon", "planeta", "moneda"];
window.addEventListener("load", inicio, true);
function inicio() {
  document.getElementById("limpiar").addEventListener("click", limpiarError, false);
  document.getElementById("enviar").addEventListener("click", validar, false);
}


function validar(e) {
 
  e.preventDefault();


 for (let i = 0; i < preguntas.length; i++) { //compruebo que se han contestado todas las preguntas
   let radioButtons = document.getElementsByName(preguntas[i]); //selecciona todos los botones de tipo radio
   let seleccionado = false;
   for (let j = 0; j < radioButtons.length; j++) {
     if (radioButtons[j].checked) {
       respuestas.push(radioButtons[j].value);       //Si el botón de radio está seleccionado  agregamos el valor del botón de radio a respuestas
       seleccionado = true;
       break;
     }
   }
   if (!seleccionado) {
     document.getElementById(i.toString()).className = "error"; //si no esta seleccionado le aplica la clase error al elemento
   }
 }
  for (let i = 0; i < 4; i++) {
    if (respuestas[i] === correctas[i]) {
      comprobacion[i] = true;                   //si la respuesta marcada coincide con la correcta, lo marca a true
      aciertos++;                          
    }
  }

  if (respuestas[0] != undefined &&
    respuestas[1] != undefined &&
    respuestas[2] != undefined &&
    respuestas[3] != undefined) {
    mostrarAciertos();
    alert("Has acertado " + aciertos + " preguntas");
  } else {
    document.getElementById("aviso").innerHTML = `No has respondido a todas las preguntas`;
    } 
  }
function mostrarAciertos() {
  if (comprobacion[0] == true) {
    document.getElementById("check0").classList.remove("bi-x-lg");
    document.getElementById("check0").classList.add("bi-check-lg");
  } else {
    document.getElementById("check0").classList.remove("bi-check-lg");
    document.getElementById("check0").classList.add("bi-x-lg");
  }
  if (comprobacion[1] == true) {
    document.getElementById("check1").classList.remove("bi-x-lg");
    document.getElementById("check1").classList.add("bi-check-lg");
  } else {
    document.getElementById("check1").classList.remove("bi-check-lg");
    document.getElementById("check1").classList.add("bi-x-lg");
  }
  if (comprobacion[2] == true) {
    document.getElementById("check2").classList.remove("bi-x-lg");
    document.getElementById("check2").classList.add("bi-check-lg");
  } else {
    document.getElementById("check2").classList.remove("bi-check-lg");
    document.getElementById("check2").classList.add("bi-x-lg");
  }
  if (comprobacion[3] == true) {
    document.getElementById("check3").classList.remove("bi-x-lg");
    document.getElementById("check3").classList.add("bi-check-lg");
  } else {
    document.getElementById("check3").classList.remove("bi-check-lg");
    document.getElementById("check3").classList.add("bi-x-lg");
  }
}


function limpiarError() {
  for (let i = 0; i++; i < 4) {
    document.getElementById(i.toString()).className.remove("error");
  }
  document.getElementById("check0").classList.remove("bi-check-lg", "bi-x-lg");
  document.getElementById("check1").classList.remove("bi-check-lg", "bi-x-lg");
  document.getElementById("check2").classList.remove("bi-check-lg", "bi-x-lg");
  document.getElementById("check3").classList.remove("bi-check-lg", "bi-x-lg");
}

