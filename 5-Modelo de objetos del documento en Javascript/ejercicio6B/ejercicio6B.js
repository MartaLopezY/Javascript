/* Análisis de página HTML
Crea una página HTML e incorpora las siguientes funciones Javascript para analizar los elementos de la página web, 
mostrando la información al final de la página:
El número de párrafos de la página.
El texto del segundo párrafo.
El número de enlaces de la página.
La dirección del primer enlace.
La dirección del penúltimo enlace.
El número de enlaces que apuntan a /wiki/Municipio
El número de enlaces del primer párrafo.
En consola se mostrará el texto de todos los elementos que sean <p>
Haz lo mismo permitiendo al usuario elegir una página html de tu mismo sitio web y cargándola dentro de un <iframe> .
 La página HTML la puede elegir el usuario con un <input type=”file”> (Comprueba si te es de utilidad la propiedad .contentDocument de un iframe).

*/
document.getElementById('archivo').addEventListener('change', function(event) {
  let archivo = event.target.files[0]; // Obtiene el archivo seleccionado
  let lector = new FileReader(); 
  // Crea un objeto FileReader que permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona.

  lector.onload = function (event) {
    // Cuando el archivo ha sido leído, actualiza el contenido del iframe
    let marco = document.getElementById("marco");
    marco.srcdoc = event.target.result;   //Accede al contenido del archivo una vez que la operación de lectura delarchivo se ha completado

    marco.onload = function () {
      // Accede al documento dentro del iframe
      let documento = marco.contentDocument || marco.contentWindow.document;

      /*Una etiqueta <iframe> aloja una ventana incrustada por separado, con sus propios objetos document y window separados.
            Podemos acceder a ellos usando las propiedades:
            iframe.contentWindow para obtener la ventana dentro del <iframe>.
            iframe.contentDocument para obtener el documento dentro del <iframe>*/

      // Contar el número de párrafos
      let parrafos = documento.getElementsByTagName("p");
      console.log("Número de párrafos: " + parrafos.length);

      // Mostrar el texto del segundo párrafo
      console.log("Texto del segundo párrafo: " + parrafos[1].innerText);

      // Contar el número de enlaces
      let enlaces = documento.getElementsByTagName("a");
      console.log("Número de enlaces: " + enlaces.length);

      // Mostrar la dirección del primer enlace
      console.log("Dirección del primer enlace: " + enlaces[0].href);

      // Mostrar la dirección del penúltimo enlace
      console.log(
        "Dirección del penúltimo enlace: " + enlaces[enlaces.length - 2].href
      );

      // Contar el número de enlaces que apuntan a /wiki/Municipio
      let enlacesWiki = Array.from(enlaces).filter((enlace) => enlace.href.includes("/wiki/Municipio")).length;
      console.log("Número de enlaces a /wiki/Municipio: " + enlacesWiki);

      // Contar el número de enlaces en el primer párrafo
      let enlacesPrimerParrafo = Array.from(
        parrafos[0].getElementsByTagName("a")
      ).length;
      console.log(
        "Número de enlaces en el primer párrafo: " + enlacesPrimerParrafo
      );

      // Mostrar el texto de todos los elementos que son <p>
      Array.from(parrafos).forEach((parrafo, index) => {
        console.log(`Texto del párrafo ${index + 1}: ` + parrafo.innerText);
      });

      // Crear un nuevo elemento para mostrar los resultados
      let resultadoDiv = document.getElementById("resultados");

      // Actualizar el elemento de resultado con la información deseada
      resultadoDiv.innerHTML =
        "Número de párrafos: " +
        parrafos.length +
        "<br>" +
        "Texto del segundo párrafo: " +
        parrafos[1].innerText +
        "<br>" +
        "Número de enlaces: " +
        enlaces.length +
        "<br>" +
        "Dirección del primer enlace: " +
        enlaces[0].href +
        "<br>" +
        "Dirección del penúltimo enlace: " +
        enlaces[enlaces.length - 2].href +
        "<br>" +
        "Número de enlaces a /wiki/Municipio: " +
        enlacesWiki +
        "<br>" +
        "Número de enlaces en el primer párrafo: " +
        enlacesPrimerParrafo;
    };
  };

  lector.readAsText(archivo); // Inicia la lectura del archivo como texto es un método propio del objeto FileReader
});


//El comando event.target se refiere más específicamente al elemento que está emitiendo un evento.