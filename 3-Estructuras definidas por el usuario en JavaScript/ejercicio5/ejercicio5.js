/*Estamos desarrollando un juego y necesitamos crear un objeto jugador, que tenga una propiedad fuerza que inicialmente vale 1, 
tendremos un método incrementarFuerza que aumentará la fuerza del jugador en 1 y un método consultar fuerza que mostrará un mensaje: 
“Tu fuerza es x” donde x es la fuerza actual del jugador.
Mostrar 2 botones que sirvan para incrementar la fuerza y para mostrar la fuerza.
 */

class Jugador{
    constructor(){
        this.fuerza=1;
       
    }
    incrementarFuerza(){
        this.fuerza++;
        return alert("Tu fuerza ha incrementado");
    }
    consultarFuerza(){
        return alert("Tu fuerza es: "+this.fuerza);
    }

}
let jugador=new Jugador();

function incrementar(){

    jugador.incrementarFuerza();

}
function consultar(){

    jugador.consultarFuerza();

}


