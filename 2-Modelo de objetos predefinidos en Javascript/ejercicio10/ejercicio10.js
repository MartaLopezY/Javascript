/*
Redirigir a una página de error personalizada: Crea una función que redirija a una página de error personalizada cuando ocurra un error. 
Al usuario se le ha de presentar una ventana de confirmación (confirm) y en el caso de que conteste que no mostrará una página indicando el error.
*/
function ejecuta(){
        let respuesta = confirm("Confirma la eleccion error");
        if(!respuesta){
        window.location="ejercicio10Error.html";
      }
}

