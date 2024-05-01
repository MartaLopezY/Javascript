/*
Generador de Formularios
Crea una aplicación que te permitirá generar tus propios formularios de manera dinámica, después de crear cada elemento, se ha de  visualizar una confirmación (confirm) indicando el tipo de elemento creado y su nombre o atributo correspondiente. Para ello dibuja una tabla de una sola fila y varias columnas. En cada columna habrá un botón que realice lo siguiente:
Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el input.
Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el input.
Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un textarea de 40 columnas y 5 filas.
Crear un label. Preguntará al usuario a qué input va referido (atributo for).
Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value).
Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value).
Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).
*/

document.getElementById("createInputText").addEventListener("click", createInputText, true);
document.getElementById("createInputPassword").addEventListener("click", createInputPassword, true);
document.getElementById("createTextArea").addEventListener("click", createTextArea, true);
document.getElementById("createLabel").addEventListener("click", createLabel, true);
document.getElementById("createImage").addEventListener("click", createImage, true);
document.getElementById("createCheckbox").addEventListener("click", createCheckbox, true);
document.getElementById("createRadio").addEventListener("click", createRadio, true);
document.getElementById("createButton").addEventListener("click", createButton, true);

function createInputText() {
  let name = prompt("¿Cuál es el nombre (atributo name) del input?");
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", name);
  document.getElementById("formContainer").appendChild(input);
  let br = document.createElement("br");
  document.getElementById("formContainer").appendChild(br);
  alert(`Has creado un input de tipo texto con el nombre ${name}`);
}

function createInputPassword() {
  let name = prompt("¿Cuál es el nombre (atributo name) del input?");
  let input = document.createElement("input");
  input.setAttribute("type", "password");
  input.setAttribute("name", name);
  document.getElementById("formContainer").appendChild(input);
  let br = document.createElement("br");
  document.getElementById("formContainer").appendChild(br);
  alert(`Has creado un input de tipo password con el nombre ${name}`);
}

function createTextArea() {
        let name = prompt("¿Cuál es el nombre del textarea?");
        let textarea = document.createElement("textarea");
        textarea.setAttribute("name", name);
        textarea.setAttribute("cols", "40");
        textarea.setAttribute("rows", "5");
        document.getElementById("formContainer").appendChild(textarea);
        let br = document.createElement("br");
        document.getElementById("formContainer").appendChild(br);
        alert(`Has creado un textarea con el nombre ${name}`);
    }

function createLabel() {
        let forAttr = prompt("¿A qué input se refiere este label?");
        let label = document.createElement("label");
        label.setAttribute("for", forAttr);
        label.innerText = `${forAttr}: `;

        // Buscar el input correspondiente
        let inputs = document.querySelectorAll("input");
        let inputRef = null;
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].getAttribute("name") === forAttr) {
            inputRef = inputs[i];
            break;
          }
        }

        // Si encontramos el input, insertamos el label antes
        if (inputRef !== null) {
          document
            .getElementById("formContainer")
            .insertBefore(label, inputRef);
        } else {
          alert(`No se encontró ningún input con el nombre ${forAttr}`);
        }
    }

function createImage() {

        let src = prompt("¿Qué ruta tiene la imagen?");
        let img = document.createElement("img");
        img.setAttribute("src", src);
        document.getElementById("formContainer").appendChild(img);
        let br = document.createElement("br");
        document.getElementById("formContainer").appendChild(br);
        alert(`Has creado una imagen con la ruta ${src}`);
    }

function createCheckbox() {
        let name = prompt("¿Cuál es el nombre del checkbox?");
        let value = prompt("¿Cuál es el valor del checkbox?");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", name);
        checkbox.setAttribute("value", value);
        document.getElementById("formContainer").appendChild(checkbox);
        let br = document.createElement("br");
        document.getElementById("formContainer").appendChild(br);
        alert(`Has creado un checkbox con el nombre ${name} y el valor ${value}`);
    }

function createRadio() {
    let name = prompt("¿Cuál es el nombre del radio?");
    let value = prompt("¿Cuál es el valor del radio?");
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", name);
    radio.setAttribute("value", value);
    document.getElementById("formContainer").appendChild(radio);
    let radioValue = document.createElement("span");
    radioValue.innerText = value;
    document.getElementById("formContainer").appendChild(radioValue);
     let br = document.createElement("br");
     document.getElementById("formContainer").appendChild(br);
    alert(`Has creado un radio con el nombre ${name} y el valor ${value}`);
   }
   
function createButton() {
    let name = prompt("¿Cuál es el nombre del botón?");
    let value = prompt("¿Cuál es el valor del botón?");
    let button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("name", name);
    button.setAttribute("value", value);
    document.getElementById("formContainer").appendChild(button);
    let br = document.createElement("br");
    document.getElementById("formContainer").appendChild(br);
    alert(`Has creado un botón con el nombre ${name} y el valor ${value}`);
   }