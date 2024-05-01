/*Simula la página de bienvenida de un banco (ING en este caso):
	Los datos de DNI-Tarjeta de residencia-Pasaporte, fecha de nacimiento y clave están almacenados en un array de objetos de tipo Cliente.
 El checkBox permite almacenar los datos de un cliente por medio de WebStorage, para que la próxima vez que acceda a la página le aparezca el DNI y la fecha de nacimiento ya colocados.
	Cliente ha de ser una clase que almacene la información del cliente necesaria para que al pulsar en entrar acceda a la siguiente ventana:
En esta ventana se mostrarán en una tabla los números del 0 al 9 en posiciones aleatorias. 
El usuario completará los números de su clave de seguridad que faltan por rellenar pulsando sobre ellos y validando la clave al pulsar en el último. (los huecos a rellenar también serán aleatorios).
En caso de introducir la clave correcta saldrá un mensaje de bienvenida.

 */
import { Cliente } from "./cliente.js";
let clientes = [
	new Cliente(true,false,'12345678Z', '01/01/1990'),
	new Cliente(true,false,'87654321Z', '02/11/2000'),
	new Cliente(false,true,'AAA543210', '11/11/1980')
];
let cliente;
function validarDocumento(tipoDocumento, numeroDocumento) {
	let dniPattern = /^\d{8}[a-zA-Z]$/;
	let pasaportePattern = /^[a-zA-Z]{3}\d{6}$/;
  
	if (tipoDocumento === 'dni' && !dniPattern.test(numeroDocumento)) {
	return false;
	} else if (tipoDocumento === 'pasaporte' && !pasaportePattern.test(numeroDocumento)) {
	return false;
	}
  
	return true;
}

function guardarDatosCliente(recordar,tipoDocumento, numeroDocumento, fechaNacimiento) {
	if (recordar) {
	localStorage.setItem('recordar', true);
	localStorage.setItem('input[name="documento"]:checked', tipoDocumento);
	localStorage.setItem('numero', numeroDocumento);
	localStorage.setItem('fechaNacimiento', fechaNacimiento);
	} else {
	localStorage.clear();
	}
}

function recuperarDatosCliente() {
	let recordar = localStorage.getItem('recordar');
	let tipoDocumento=localStorage.getItem('input[name="documento"]:checked');
	let numeroDocumento= localStorage.getItem('numero');
	let fechaNacimiento = localStorage.getItem('fechaNacimiento');
  
	if (recordar) {
	document.querySelector('input[name="documento"]:checked').value=tipoDocumento;
	document.getElementById('numero').value = numeroDocumento;
	document.getElementById('dia').value = fechaNacimiento.split('/')[0];
	document.getElementById('mes').value = fechaNacimiento.split('/')[1];
	document.getElementById('year').value = fechaNacimiento.split('/')[2];
	}
}

function validarFormulario(e) {
	e.preventDefault();
  
	let tipoDocumento = document.querySelector('input[name="documento"]:checked').value;
	let numeroDocumento = document.getElementById('numero').value;
	let fechaNacimiento = document.getElementById('dia').value + '/' + document.getElementById('mes').value + '/' + document.getElementById('year').value;
	let recordar = document.getElementById('recordar').checked;
  
	if (!validarDocumento(tipoDocumento, numeroDocumento)) {
	alert('El número de documento no es válido');
	return;
	}
	cliente = clientes.find(c => c.numero === numeroDocumento && c.fechaNacimiento === fechaNacimiento);
	//El método find busca en el array clientes el primero que cumple con esa condición y lo asigna a cliente
	if (!cliente) {
	alert('DNI o fecha de nacimiento incorrectos');
	return;
	}

	guardarDatosCliente(recordar,tipoDocumento, numeroDocumento, fechaNacimiento);
	document.getElementById('bienvenida').style.display = 'none';
	document.getElementById('seguridad').style.display = 'block';
	mostrarClaveSeguridad(cliente.clave); // Llama a la función mostrarClaveSeguridad aquí
	mostrarInputs();
	
	
}

document.getElementById('formulario').addEventListener('submit', validarFormulario);

document.addEventListener('DOMContentLoaded', recuperarDatosCliente);
/*se utiliza para ejecutar una función cuando el documento HTML ha sido completamente cargado y parseado, sin esperar 
a que se carguen los estilosheets, imágenes y subframes.Si el cliente existe y esta guardado con localstorage lo muestra*/
function mostrarClaveSeguridad(clave) {
	let digitos = Array.from(clave); 
	
	/*crea un nuevo array de elementos donde cada elemento es un caracter de la cadena clave por ejemplo: 
	let clave = "123456";
   let digitos = Array.from(clave);
   console.log(digitos); // Imprime: ['1', '2', '3', '4', '5','6']*/
	
	console.log(digitos); //para poder ver la clave generada en consola, es solo para testear
	let indices =Array.from('012345');
	shuffle(indices);  //desordena el array
	for (let i = 0; i < 3; i++) {
		let input = document.getElementById("digito" + indices[i]);  //selecciona el input aleatoriamente
		input.value = digitos[indices[i]];  //al input seleccionado le asigno el valor de la clave de la posición aleatoria
	}

    }
		

function shuffle(array) {
 for (let i = array.length - 1; i > 0; i--) {
   let j = Math.floor(Math.random() * (i + 1)); //genera un numero aleatorio entre 0 y la longitud del array+1
   [array[i], array[j]] = [array[j], array[i]]; //intercambia las posiciones de i y j
 }
}   //este método desordena el array

function mostrarInputs() {
 let digitos = Array.from('0123456789');
 shuffle(digitos);
 let botones = document.querySelectorAll('#digitos button');
 for (let i = 0; i < botones.length; i++) {
   botones[i].textContent = digitos[i];  //le da el valor a los botones
   botones[i].addEventListener('click', function() {
     let inputs = document.querySelectorAll('#clave input'); 
     for (let j = 0; j < inputs.length; j++) { //recorre todos los inputs de clave
       if (inputs[j].value === '') {
         inputs[j].value = this.textContent;  
		//si el valor del campo de entrada está vacío, establece el valor del campo de entrada al texto del botón 
		validarClave();
         break;

       }
     }

   });

 }

}
function validarClave() {

  let clave = "";
  let inputs = document.querySelectorAll('#clave input');
  for (let i = 0; i < inputs.length; i++) {
	if (!inputs[i].value) {
		return; //si algun input no tiene valor sale sin validar la clave
	}
	clave += inputs[i].value;
  }

  if (clave === cliente.clave) {
    alert("Bienvenido a tu Área Cliente");
 
  } else {
    alert("Clave incorrecta");
  
  }
}