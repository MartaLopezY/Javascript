/*Crea un archivo JSON que contenga un array de equipos de fútbol con un mínimo de 5 equipos :

 Nombre, PartidosJugados(PJ), PartidosGanados(PG),PartidosPerdidos(PP),PartidosEmpatados(PE) 

Tu página web debe cargar ese JSON directamente desde el archivo y mostrará un <select> para seleccionar el nombre del equipo. Al seleccionar un equipo mostrará sus datos en la página.

 */



document.getElementById("equiposSelect").addEventListener("change", mostrarDatosEquipo);

let equipos = [];
cargarDatos();

function cargarDatos() {
  fetch("equipos.json")
     .then(response => response.json())
     .then(datos => {
       equipos = datos;
       let selectEquipos = document.getElementById("equiposSelect");
       selectEquipos.innerHTML = "";
       for (let i = 0; i < equipos.length; i++) {
         let opt = document.createElement("option");
         let texto = document.createTextNode(equipos[i].Nombre);
         opt.value = i;
         opt.appendChild(texto);
         selectEquipos.appendChild(opt);
       }
 
       // Crear el encabezado de la tabla
       let tabla = document.getElementById("respuesta");
       let encabezado = tabla.createTHead();
       let filaEncabezado = encabezado.insertRow(0);
       let celdaNombre = filaEncabezado.insertCell(0);
       celdaNombre.textContent = "Nombre";
       let celdaJugados = filaEncabezado.insertCell(1);
       celdaJugados.textContent = "Partidos Jugados";
       let celdaGanados = filaEncabezado.insertCell(2);
       celdaGanados.textContent = "Partidos Ganados";
       let celdaPerdidos = filaEncabezado.insertCell(3);
       celdaPerdidos.textContent = "Partidos Perdidos";
       let celdaEmpatados = filaEncabezado.insertCell(4);
       celdaEmpatados.textContent = "Partidos Empatados";
     })
     .catch(error => console.error('Error:', error));
 }

function mostrarDatosEquipo() {
  let indiceSeleccionado = document.getElementById("equiposSelect").selectedIndex;
 
  if (indiceSeleccionado >= 0) {
     let equipoSeleccionado = equipos[indiceSeleccionado];
     let tabla = document.getElementById("respuesta");
 
     // Eliminar todas las filas existentes excepto la primera
     let filas = Array.from(tabla.rows);
     filas.slice(1).forEach((fila, index) => {
         if (fila.firstChild.nodeName != 'TH') {
             tabla.deleteRow(index + 1);
         }
     });
 
     // Crear y agregar la nueva fila con los datos del equipo seleccionado
     let fila = document.createElement("tr");
     let tdNombre = document.createElement("td");
     tdNombre.textContent = equipoSeleccionado.Nombre;
     fila.appendChild(tdNombre);
     let tdJugados = document.createElement("td");
     tdJugados.textContent = equipoSeleccionado.PartidosJugados;
     fila.appendChild(tdJugados);
     let tdGanados = document.createElement("td");
     tdGanados.textContent = equipoSeleccionado.PartidosGanados;
     fila.appendChild(tdGanados);
     let tdPerdidos = document.createElement("td");
     tdPerdidos.textContent = equipoSeleccionado.PartidosPerdidos;
     fila.appendChild(tdPerdidos);
     let tdEmpatados = document.createElement("td");
     tdEmpatados.textContent = equipoSeleccionado.PartidosEmpatados;
     fila.appendChild(tdEmpatados);
     tabla.appendChild(fila);
  }
 }
