/*Formulario Dinámico
Crea de manera dinámica (es decir, al cargarse la página) el formulario que definimos en el ejercicio 5.5 de la unidad  5
Ten en cuenta que el formulario deberá tener los atributos necesarios para que, al crearse, tenga la misma funcionalidad que el que creaste en html. Utiliza los métodos vistos en la unidad. 
Al añadir un nuevo disco se debe de mostrar una tabla creada con elementos de manera dinámica que muestre todos los discos del array en orden alfabético y resaltando de alguna manera el disco recién añadido.
 */
import { Disco } from './discos.js';
let discos = [];
window.addEventListener("load", generarFormulario, false);
function generarFormulario() {
    const formulario = document.createElement('form');
    const formularioContainer = document.getElementById('formularioContainer');
    formularioContainer.appendChild(formulario);
    formulario.method = "post";
    formulario.id = "formulario";
 
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.innerText = 'Datos de disco';
    fieldset.appendChild(legend);
 
    agregarCampoDeTexto('nombre', 'Nombre de disco', 'text', fieldset);
    agregarCampoDeTexto('componente', 'Componente de disco','text', fieldset);
    agregarCampoDeTexto('publicacion', 'Año de publicación','text', fieldset);
    agregarCampoDeSelect('tipo', 'Tipo de música', ['rock', 'pop', 'punk', 'indie'], fieldset);
    agregarCampoDeTexto('localizacion', 'Localizacion','text', fieldset);
    agregarCampoDeTexto('prestado', 'Prestado', 'checkbox', fieldset);
    const brAfterSelect = document.createElement('br');
    fieldset.appendChild(brAfterSelect);
 
 
    const boton = document.createElement('input');
    boton.type = 'submit';
    boton.value = 'Enviar';
    boton.id = 'enviar';
    boton.addEventListener('click', validar); 
    fieldset.appendChild(boton);
 
    formulario.appendChild(fieldset);
    document.body.appendChild(formulario);
 }
 function agregarCampoDeSelect(id, labelText, options, parent) {
    const label = document.createElement('label');
    label.id = id + 'Label';
    label.innerText = labelText + ': ';
    parent.appendChild(label);
  
    const select = document.createElement('select');
    select.id = id;
    select.name = id;
    parent.appendChild(select);
  
    options.forEach(opcion => {
       const optionElement = document.createElement('option');
       optionElement.value = opcion;
       optionElement.innerText = opcion;
       select.appendChild(optionElement);
    });
  
    const br = document.createElement('br');
    parent.appendChild(br);
  }
  

  function agregarCampoDeTexto(id, labelText, type, parent) {
    const label = document.createElement('label');
    label.id = id + 'Label';
    label.innerText = labelText + ': ';
    parent.appendChild(label);
  
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    label.appendChild(input);
    const br = document.createElement('br');
    parent.appendChild(br);
  }
   

function validaNombre(elemento, textoElemento) {
  limpiarError(textoElemento);
  const regexElemento = /[a-zA-Z]{1,20}/;
  if (regexElemento.test(elemento.value)) {
    return true;
  } else  if (elemento.value.length < 1) {
     error(elemento, textoElemento, "Este campo no puede estar vacio");
  }else{
    error(elemento, textoElemento, "Debe tener un máximo de 20 caracteres");
    return false;
  }
  
}

function validaPublicacion() {
    let publicacion = document.querySelector("#publicacion");
    let textPublicacion = document.querySelector("#publicacionLabel");
    const regexPublicacion = /[0-9]{4}/;
  limpiarError(textPublicacion);
  if (regexPublicacion.test(publicacion.value)) {
    return true;
  } else {
    error(publicacion, textPublicacion, "Debe ser un número de 4 cifras");
    return false;
  }
}
function validaLocalizacion() {
    let localizacion = document.querySelector("#localizacion");
    let textLocalizacion = document.querySelector("#localizacionLabel");
    const regexLocalizacion = /^(|[\d]+)$/;
  limpiarError(textLocalizacion);
  if (regexLocalizacion.test(localizacion.value)) {
    return true;
  } else {
    error(localizacion, textLocalizacion, "Debe ser un campo numérico");
    return false;
  }
}

function validar(e) {
  e.preventDefault();
  let nombre = document.querySelector("#nombre");
  let textNombre = document.querySelector("#nombreLabel");
  let componente = document.querySelector("#componente");
  let textComponente = document.querySelector("#componenteLabel");
  let publicacion = document.querySelector("#publicacion");
  let tipo = document.querySelector("#tipo");
  let localizacion = document.querySelector("#localizacion");
  let prestado = document.querySelector("#prestado");
  if (
    validaNombre(nombre, textNombre) &&
    validaNombre(componente, textComponente) &&
    validaPublicacion() &&
    validaLocalizacion() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    const nuevoDisco = new Disco(nombre.value, componente.value, publicacion.value, tipo.value, localizacion.value, prestado.checked);
    discos.push(nuevoDisco);
    mostrarTabla();
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function mostrarTabla() {
  let tablaExistente = document.getElementById('miTabla');
  if (!tablaExistente) {
      // La tabla no existe, así que la creamos
      const tabla = document.createElement('table');
      tabla.id = 'miTabla';
      const tablaContainer = document.getElementById('tablaContainer');
      tablaContainer.appendChild(tabla);
      tablaExistente = tabla; // Asegurarnos de que tablaExistente apunte a la tabla correcta
  } else {
      // La tabla ya existe, así que borramos su contenido
      tablaExistente.innerHTML = '';
  }  
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  ['Nombre', 'Componentes', 'Publicación', 'Tipo de Música', 'Localización', 'Prestado'].forEach(titulo => {
      const th = document.createElement('th');
      th.innerText = titulo;
      trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  tablaExistente.appendChild(thead); 
  let ultimo=discos[discos.length-1];
  discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  for (const disco of discos) {
     const fila = document.createElement('tr');
        
    if (disco === ultimo) {
      fila.classList.add("resaltado");
    }
     const celdaNombre = document.createElement('td');
     celdaNombre.innerText = disco.nombre;
     fila.appendChild(celdaNombre);
     
     const celdaComponente = document.createElement('td');
     celdaComponente.innerText = disco.componentes;
     fila.appendChild(celdaComponente);
     
     const celdaPublicacion = document.createElement('td');
     celdaPublicacion.innerText = disco.publicacion;
     fila.appendChild(celdaPublicacion);
     
     const celdaTipo = document.createElement('td');
     celdaTipo.innerText = disco.tipoMusica;
     fila.appendChild(celdaTipo);
     
     const celdaLocalizacion = document.createElement('td');
     celdaLocalizacion.innerText = disco.localizacion;
     fila.appendChild(celdaLocalizacion);
     
     const celdaPrestado = document.createElement('td');
     celdaPrestado.innerText = disco.prestado ? 'Si' : 'No';
     fila.appendChild(celdaPrestado);
     
     tablaExistente.appendChild(fila);
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
