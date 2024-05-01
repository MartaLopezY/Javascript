/*Crea un archivo JSON que contenga un array de equipos de fútbol con un mínimo de 5 equipos :

 Nombre, PartidosJugados(PJ), PartidosGanados(PG),PartidosPerdidos(PP),PartidosEmpatados(PE) 

Tu página web debe cargar ese JSON directamente desde el archivo y mostrará un <select> para seleccionar el nombre del equipo. Al seleccionar un equipo mostrará sus datos en la página.
	Modifica el ejercicio 7.1.4 para que los datos del equipo aparezcan con una animación tipo persiana, 
  al cambiar de equipo se ha de ocultar la información del anterior y mostrar con el mismo efecto los datos del nuevo equipo seleccionado.
 */


  let equipos = [];
  cargarDatos();
  
  function cargarDatos() {
   $.getJSON("equipos.json", function(data) {
      equipos = data;
      let selectEquipos = $("#equiposSelect");
      selectEquipos.empty();
      $.each(equipos, function(key, entry) {
        selectEquipos.append($('<option></option>').attr('value', key).text(entry.Nombre));
      });
      crearEncabezadoTabla();
   });
  }
  
  function crearEncabezadoTabla() {
   let tabla = $("#respuesta");
   let encabezado = $('<thead>').appendTo(tabla);
   let filaEncabezado = $('<tr>').appendTo(encabezado);
   filaEncabezado.append($('<th>').text("Nombre"));
   filaEncabezado.append($('<th>').text("Partidos Jugados"));
   filaEncabezado.append($('<th>').text("Partidos Ganados"));
   filaEncabezado.append($('<th>').text("Partidos Perdidos"));
   filaEncabezado.append($('<th>').text("Partidos Empatados"));
  }
  
  $(document).ready(function(){
    $("#equiposSelect").change(function(){
       let indiceSeleccionado = $(this).prop('selectedIndex');
       if (indiceSeleccionado >= 0) {
         let equipoSeleccionado = equipos[indiceSeleccionado];
         let tabla = $("#respuesta");
         tabla.children('tr:last').slideUp(500, function(){
           $(this).remove();
         });
         let fila = $("<tr>");
         fila.append($("<td>").text(equipoSeleccionado.Nombre));
         fila.append($("<td>").text(equipoSeleccionado.PartidosJugados));
         fila.append($("<td>").text(equipoSeleccionado.PartidosGanados));
         fila.append($("<td>").text(equipoSeleccionado.PartidosPerdidos));
         fila.append($("<td>").text(equipoSeleccionado.PartidosEmpatados));
         tabla.append(fila);
         fila.hide().slideDown(500);
       }
    });
   });

