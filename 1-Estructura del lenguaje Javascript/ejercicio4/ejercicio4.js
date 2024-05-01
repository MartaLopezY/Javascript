/*Crea un programa que pida al usuario que introduzca una edad y muestre el
siguiente mensaje en función del número introducido:
■ 0-12: Niño
■ 13-26: Joven
■ 27-60: Adulto
■ >60: Jubilado
Para guardar un valor del usuario utilizamos el siguiente código:
■ var respuesta = prompt (“Mensaje”);
También comprobará que no se meta un número menor de 0. Comenta el código con los
comentarios que estimes necesarios.*/
let edad= prompt ("Introduce la edad:");
if (edad<0){
    window.alert("Has introducido un número negativo");
}else if (edad<12){
    window.alert("Niño");
}else if(edad>12 && edad<26){
    window.alert("Joven");
}else if(edad>26 && edad<60){
    window.alert("Adulto");
}else window.alert("Jubilado");
