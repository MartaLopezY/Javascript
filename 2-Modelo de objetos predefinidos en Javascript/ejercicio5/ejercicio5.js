/*Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.
El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.
Utiliza para ello los métodos del objeto Number.
Por ejemplo si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32
*/
function ejecuta(){
    let numero= document.getElementById("numero").value;
    let num=new Number(parseInt(numero));
    let exponencial=num.toExponential();
    let decimal=num.toFixed(4);
    let binario=num.toString(2);
    let octal=num.toString(8);
    let hexadecimal=num.toString(16);
 let respuesta=("El valor exponencial es: "+ exponencial + "<br> El número con 4 decimales es: "+decimal+
"<br> El número en binario es: "+ binario +"<br> El número en octal es: "+octal+"<br> El número en hexadecimal es: "+hexadecimal);
 document.getElementById("resultado").innerHTML= `${respuesta}`;
 }