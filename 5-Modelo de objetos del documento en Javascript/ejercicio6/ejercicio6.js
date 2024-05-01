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
 // Contar el número de párrafos
 let parrafos = document.getElementsByTagName('p');
 console.log("Número de párrafos: " + parrafos.length);

 // Mostrar el texto del segundo párrafo
 console.log("Texto del segundo párrafo: " + parrafos[1].innerText);

 // Contar el número de enlaces
 let enlaces = document.getElementsByTagName('a');
 console.log("Número de enlaces: " + enlaces.length);

 // Mostrar la dirección del primer enlace
 console.log("Dirección del primer enlace: " + enlaces[0].href);

 // Mostrar la dirección del penúltimo enlace
 console.log("Dirección del penúltimo enlace: " + enlaces[enlaces.length - 2].href);

 // Contar el número de enlaces que apuntan a /wiki/Municipio
 let enlacesWiki = Array.from(enlaces).filter(enlace => enlace.href.includes('/wiki/Municipio')).length;
 console.log("Número de enlaces a /wiki/Municipio: " + enlacesWiki);

 // Contar el número de enlaces en el primer párrafo
 let enlacesPrimerParrafo = Array.from(parrafos[0].getElementsByTagName('a')).length;
 console.log("Número de enlaces en el primer párrafo: " + enlacesPrimerParrafo);

 // Mostrar el texto de todos los elementos que son <p>
 Array.from(parrafos).forEach((parrafo, index) => {
     console.log(`Texto del párrafo ${index + 1}: ` + parrafo.innerText);
 });
 let resultadoDiv = document.getElementById('resultados');
   // Actualizar el elemento de resultado con la información deseada
 resultadoDiv.innerHTML = 'Número de párrafos: ' + parrafos.length + '<br>' +
   'Texto del segundo párrafo: ' + parrafos[1].innerText + '<br>' +
   'Número de enlaces: ' + enlaces.length + '<br>' +
   'Dirección del primer enlace: ' + enlaces[0].href + '<br>' +
   'Dirección del penúltimo enlace: ' + enlaces[enlaces.length - 2].href + '<br>' +
   'Número de enlaces a /wiki/Municipio: ' + enlacesWiki + '<br>' +
   'Número de enlaces en el primer párrafo: ' + enlacesPrimerParrafo;