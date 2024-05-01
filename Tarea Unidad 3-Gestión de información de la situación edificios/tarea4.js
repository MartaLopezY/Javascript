/*Trabajando con objetos Javascript:

Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
El código postal del edificio A es: 15706.
La calle del edificio C es: San Clemente.
El edificio B está situado en la calle Camino Caneiro número 29.
Agregamos 2 plantas y 3 puertas por planta al edificio A...

Agregamos 4 propietarios al edificio A...

Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
Listado de propietarios del edificio calle García Prieto número 58

Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2: Antonio Pereira.
Propietario del piso 3 de la planta 2:
Agregamos 1 planta más al edificio A...

Agregamos 1 propietario más al edificio A planta 3, puerta 2...

Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
Listado de propietarios del edificio calle García Prieto número 58

Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2:
Propietario del piso 1 de la planta 3:
Propietario del piso 2 de la planta 3: Pedro Meijide.
 */


import { Edificio } from './edificio.js';
let edificios=[];

window.addEventListener("load",inicio,true);
function inicio(){
  document.getElementById("respuesta");
  document.getElementById("cargarDatos").addEventListener("click",datos,true);
  document.getElementById("boton").addEventListener("click",ejecuta,true);
}
function datos(){
  let edificioA = new Edificio("Garcia Prieto", 58, 15706);
  edificios.push(edificioA);
  let edificioB = new Edificio("Camino Caneiro", 29, 32004);
  edificios.push(edificioB);
  let edificioC = new Edificio("San Clemente", "s/n", 15705);
  edificios.push(edificioC);
  edificios[0].agregarPlantasYPuertas(2, 3);
  edificios[0].agregarPropietario("Jose Antonio Lopez", 1, 1);
  edificios[0].agregarPropietario("Luisa Martinez", 1, 2);
  edificios[0].agregarPropietario("Marta Castellón", 1, 3);
  edificios[0].agregarPropietario("Antonio Pereira", 2, 2);
  edificios[0].agregarPlantasYPuertas(1, 3);
  edificios[0].agregarPropietario("Pedro Meijide", 3, 2);

}
function ejecuta(){

let menuOpcion=document.getElementById("opcion").value;
let salida=document.getElementById("respuesta");
switch(menuOpcion){
case "1": edificios.push(nuevoEdificio()); break;
case "2": {let posicion=prompt("Introduce el número de la posición del edificio:");
          let numplantas=prompt("Introduce el número de plantas:");
          let puertas=prompt("Introduce el número de puertas:");
          edificios[posicion].agregarPlantasYPuertas(numplantas, puertas);
          break;
          }
        
case "3":{ let posicion=prompt("Introduce el número de la posición del edificio:");
          let numero=prompt("Introduce el número del edificio:");
          edificios[posicion].modificarNumero(numero);
          break;}
case "4": 
          { let posicion=prompt("Introduce el número de la posición del edificio:");
          let calle=prompt("Introduce el nombre de la calle:");
          edificios[posicion].modificarCalle(calle);
          break;}
      
case "5": { let posicion=prompt("Introduce el número de la posición del edificio:");
            let codigo=prompt("Introduce el Código Postal:");
            edificios[posicion].modificarCodigoPostal(codigo);
            break;}
case "6": {
          let posicion=prompt("Introduce el número de la posición del edificio:");
          let calle=edificios[posicion].imprimeCalle();
          salida.innerHTML=`El nombre de la calle es: ${calle}`;
          break;
        }
case "7": {
          let posicion=prompt("Introduce el número de la posición del edificio:");
          let numero=edificios[posicion].imprimeNumero();
          salida.innerHTML=`El número del edificio es: ${numero}`;
          break;
        }
case "8":  {let posicion=prompt("Introduce el número de la posición del edificio:");
            let codigo=edificios[posicion].imprimeCodigoPostal();
            salida.innerHTML=`El código postal del edificio es: ${codigo}`;
            break;
            }
case "9":   {let posicion=prompt("Introduce el número de la posición del edificio:");
            let propietario=prompt("Introduce el nombre del propietario:");
            let planta=prompt("Introduce el número de planta:");
            let puerta=prompt("Introduce el número de puerta:");
            edificios[posicion].agregarPropietario(propietario,planta,puerta);
              break;}
case "10":   {
          let posicion=prompt("Introduce una posición:");
          salida.innerHTML=`Propietarios del edificio por planta y puerta:<br>${edificios[posicion].imprimePlantas ()}`;
          break;
        }

}
function nuevoEdificio(){
  let calle=prompt("Introduce el nombre de la calle:");
  let numero=prompt("Introduce el número:");
  let codigoPostal=prompt("Introduce el código Postal:");
  return (new Edificio(calle,numero,codigoPostal));
}

}