/*Crea un programa que pida al usuario que elija una opción del siguiente menú:
Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.
 */
function ejecuta(){
   let opcion= document.getElementById("opcion").value;
switch(opcion){
case "1": 
      potencia(); 
      break;
case "2": 
      raiz(); 
      break;
case "3": 
      redondeo(); 
      break;
case "4": 
      trigonometria(); 
      break;
default: alert("Has introducido mal la opción") ;break;
}

}
function potencia(){
   let base = prompt("Introduce la base");
   let exponente = prompt("Introduce el exponente");
   let resultado= Math.pow(base,exponente);
   alert("La potencia de "+base+" elevado a "+exponente+" es: "+ resultado);
}
function raiz(){
   let numero=prompt("Introduce un número");
   let resultado= Math.sqrt(numero);
   alert("La raiz cuadrada de "+numero+" es: "+ resultado);
}
function redondeo(){
   let numero=prompt("Introduce un número decimal");
   let resultado= Math.round(numero);
   alert("El redondeo de "+numero+" es: "+ resultado);
}
function trigonometria(){
   let angulo=prompt("Introduce un angulo");
   let seno= Math.sin(angulo);
   let coseno= Math.cos(angulo);
   let tangente= Math.tan(angulo);
   alert("El angulo "+angulo+" tiene un seno de: "+ seno+ " tiene un coseno de: "+ coseno+" tiene una tangente de: "+ tangente);
}