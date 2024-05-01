/*Crea un programa que reciba como entrada un array de cadenas con la convocatoria de jugadores para un partido:
Por ejemplo:
const convocatorias = ["Marcos,Luis,Pepe,Manuel,Lolo","Marcos,Luis,Pepe,David,Antonio,Pedro"]

El array puede contener 2 o más cadenas, con diferente número de nombres.
El programa debe de obtener la lista de jugadores que han sido convocados a todos los partidos.
En el caso del ejemplo saldría: Marcos, Luis y Pepe*/

let convocatorias=["Marcos,Luis,Pepe,Manuel,Lolo","Marcos,Luis,Pepe,David,Antonio,Pedro"];
let partidos=[];   
let nombres=[];
for (let i=0;i<(convocatorias.length);i++){
    partidos.push(convocatorias[i].split(','));    //para cada convocatoria se divide la cadena de texto en un array de nombres mediante el método split
}
nombres=partidos[0];   // Aquí se obtienen los nombres de los jugadores del primer partido 
function inicio(){
let convocados=[];
for(let i=0;i<(nombres.length);i++){
    
    for(let j=1;j<(partidos.length);j++){
      
        let aux=partidos[j].find(nombre => nombre===nombres[i]);    //se lee sobre cada nombre en nombres y para cada nombre, se lee sobre cada partido en partidos excepto el primero
    if(aux != null) convocados.push(aux);                          /*Para cada partido, se utiliza el método find() para buscar el nombre actual en el partido. 
                                                                    Si el nombre se encuentra en el partido (es decir, find() no devuelve null), entonces se añade el nombre al array convocados.*/
}
    
    }
    alert("Los jugadores convocados son: "+ convocados.toString());
}