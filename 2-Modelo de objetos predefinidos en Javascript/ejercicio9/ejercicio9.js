/*
Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
– Los NIFs están formados por 8 dígitos y una letra de control.
-Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
Necesitamos un formulario con dos campos: en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.

*/
function ejecuta(){
    const letra=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    let nie= document.getElementById("nie").value;
    nie = nie.replace("X", "0");
    nie = nie.replace("Y", "1");
    nie = nie.replace("Z", "2");
    let posicion=parseInt(nie)%23;
    document.getElementById("letra").innerHTML=`${letra[posicion]}`;
}

