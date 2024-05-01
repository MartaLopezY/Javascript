/*
Crea un programa en el que muestres el resultado de varias operaciones mediante alert, mostrando el texto exacto de la operación realizada y su resultado.
Las operaciones a realizar son:
10 == 10
10 === 10
10 === 10.0
“Laura” == “laura”
“Laura” > “laura”
“Laura” < “laura”
“123” == 123
“123” === 123
 */
let operacion1=(10==10);
let operacion2=(10 === 10);
let operacion3=(10 === 10.0);
let operacion4=("Laura" == "laura");
let operacion5=("Laura" > "laura");
let operacion6=("Laura" < "laura");
let operacion7=("123" == 123);
let operacion8=("123" === 123);
let operacion9=(parseInt("123") === 123);


window.alert("La operación 10==10 es: " + operacion1);
window.alert("La operación 10 === 10 es: " + operacion2);
window.alert("La operación 10 === 10.0 es: " + operacion3);
window.alert("La operación 'Laura' == 'laura' es: " + operacion4);
window.alert("La operación 'Laura'> 'laura' es: " + operacion5);
window.alert("La operación 'Laura'< 'laura'  es: " + operacion6);
window.alert("La operación '123'== 123 es: " + operacion7);
window.alert("La operación '123' == 123 es: " + operacion8);
window.alert("La operación parseInt('123') === 123 es: " + operacion9);