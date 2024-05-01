/*EJERCICIO 1 (objeto Date)
Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 22 de junio).
 */
    let fechaHoy=new Date();
    let fechaFin=new Date(2024,6,22);

function ejecuta() {
    
    let ms=(fechaFin.getTime()-fechaHoy.getTime());
    let dias=Math.floor(ms/(1000*60*60*24));
    alert("Faltan "+dias+" dias");
  }
  

  