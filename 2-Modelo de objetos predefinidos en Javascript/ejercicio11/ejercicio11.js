/*
Obtener la ubicación actual del usuario: Utiliza el método navigator.geolocation para obtener la ubicación actual del usuario y muestra las coordenadas en la consola.
*/
function ejecuta(){
   
       

        navigator.geolocation.getCurrentPosition(muestraMiUbicacion);
}


function muestraMiUbicacion(posicion){
	var latitud = posicion.coords.latitude
	var longitud = posicion.coords.longitude
	
        console.log( "Latitud: "+latitud+" Longitud: "+longitud);
}