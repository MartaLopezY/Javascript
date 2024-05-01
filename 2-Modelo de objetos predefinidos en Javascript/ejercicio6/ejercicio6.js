/*
Crea un programa que pida al usuario su nombre y apellidos (todo junto) y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga 
Nombre: 
Apellido 1: 
Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido.  Ej. Para Marcos Prado Fernández sería mpradof
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. MarPraFer
*/
function ejecuta(){
    let nombre= document.getElementById("nombre").value;
    let tamaño = nombre.replace(/ /g, "").length; //uso una expresión regular que busca todos los espacios globales de la cadena (la "g" hace que sean globales) y los reemplaza por "" que quiere decir que los borra
document.write("<p>El tamaño del nombre más los apellidos (sin contar espacios)es: " + tamaño + "</p>");

  let  minusculas=nombre.toLowerCase();
  let mayusculas=nombre.toUpperCase();
  

  document.write(
    "<p>La cadena en minusculas: " + minusculas + "</p>"
  );
  
  document.write(
    "<p>La cadena en  mayúsculas:  " + mayusculas + "</p>"
  );
let cadenaDividida = nombre.split(" "); 
document.write(
  "<p>Nombre: " + cadenaDividida[0] + "</p><p>Apellido 1: " + cadenaDividida[1] + "</p><p><p>Apellido 2: " + cadenaDividida[2] + "</p>"
); 
let propuesta1 =
cadenaDividida[0].charAt(0).toLowerCase() +
cadenaDividida[1].toLowerCase() +
cadenaDividida[2].charAt(0).toLowerCase();
document.write("<p>Propuesta 1 de nombre de Usuario: " + propuesta1 + "</p>");
let propuesta2 =
  (cadenaDividida[0].charAt(0).toUpperCase() + cadenaDividida[0].slice(1, 3).toLowerCase()) +
  (cadenaDividida[1].charAt(0).toUpperCase() + cadenaDividida[1].slice(1, 3).toLowerCase()) +
  (cadenaDividida[2].charAt(0).toUpperCase() + cadenaDividida[2].slice(1, 3).toLowerCase());
  document.write("<p>Propuesta 2 de nombre de Usuario: " + propuesta2 + "</p>");

 }