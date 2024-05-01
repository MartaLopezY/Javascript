/*Haz un programa que pregunte una letra de la A a la Z. 
Tras ello te dirá cuantos DNIs de 3 cifras (del 001 al 999) tienen esa letra y los meterá en un array, tras ello te mostrará el listado de todos los DNIs que tienen esa letra.
 */
function ejecuta(){
   
    let abecedario="TRWAGMYFPDXBNJZSQVHLCKE";
    let letra= document.getElementById("letra").value;
    let posicion=abecedario.indexOf(letra);
    let dnis=[];
   for(let i=1;i<=999;i++){
    if(i%23==posicion){
      if(i<10){dnis.push("00"+i);}
      else if(i<100){dnis.push("0"+i);}
      else dnis.push(i);
    }
   }  
    document.getElementById("resultado").innerHTML=`Los DNIs de 3 cifras que tienen esa letra son: ${dnis.toString()}`;
 }