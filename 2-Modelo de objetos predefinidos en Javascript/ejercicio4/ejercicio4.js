/*Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
• El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
• Debes escribir al lado si son cm, o cm2, o cm3.
Por ejemplo, si metes 5, deberías obtener: 5cm / 10 cm / 31,41 cm / 78,54 cm2 / 314,15 cm2 / 523,59 cm3.

 */
function ejecuta(){
   let radio= document.getElementById("radio").value;
   let diametro=radio*2;
   let perimetro=Math.PI*diametro;
   let circulo=Math.PI*Math.pow(radio,2);
   let esfera=4*circulo;
   let volumen=(4/3)*Math.PI*Math.pow(radio,3);
let respuesta=("El valor del radio es: "+ radio + "<br> El diámetro es: "+diametro+"<br> El perimetro de la circunferencia es: "+
 perimetro+"<br> El área del circulo es: "+ circulo +"<br> El área de la esfera es: "+esfera+"<br> El volumen de la esfera es: "+volumen);
document.getElementById("resultado").innerHTML= `${respuesta}`;
}


