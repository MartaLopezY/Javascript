/*Realiza una web en la que el usuario pueda introducir el nombre de un ordenador con el siguiente formato:
DOCXXXT
025PXXXT
XXX sera un numero entre el 000 y el 252
T puede ser A, B  o C
Se le mostrará al usuario la siguiente dirección IP dependiendo de el nombre y de la letra T
T= A  → 10.42.68.XXX
T= B   → 10.42.69.XXX
T= C   → 10.52.178.XXX
*/

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let letra = nombre.charAt(nombre.length - 1);
    let xxx = nombre.replace("DOC", "");
    xxx=xxx.replace("025P", "");
    xxx=xxx.replace(letra, "");
    switch (letra) {
      case "A":
        document.getElementById("respuesta").innerHTML="A → 10.42.68."+`${xxx}`; 
        break;
      case "B":
        document.getElementById("respuesta").innerHTML="B → 10.42.69."+`${xxx}`;
        break;
      case "C":
        document.getElementById("respuesta").innerHTML="C → 10.52.178."+`${xxx}`;
        break;
    }
}