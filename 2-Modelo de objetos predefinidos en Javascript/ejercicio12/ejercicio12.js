/*Controlar el tiempo de vida de una ventana emergente: 
Crea una ventana emergente y permite al usuario cerrarla, si el usuario no la cierra se ha de cerrar a los 3 segundos de manera automática. */
let miVentana;
function abrir(){
    miVentana=window.open("","","width=500,height=200");

setTimeout(cerrar, 3000);

}
function cerrar(){
    miVentana.close();
}