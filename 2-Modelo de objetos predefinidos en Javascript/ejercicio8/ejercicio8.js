/*
Haz un programa que reciba cadenas del tipo: 
“nombre:apellidos:teléfono:email:codigopostal” y que te muestre: 
◦ El código postal. 
◦ Los apellidos 
◦ El email. 
◦ Suponiendo un formato de email “direccion@servidor” te muestre el servidor asociado.
◦ El teléfono.
*/
function ejecuta(){
    let cadena= document.getElementById("cadena").value;
    let cadenaDividida = cadena.split(":"); 
    let apellidos=cadenaDividida[1];
    let telefono=cadenaDividida[2];
    let email=cadenaDividida[3];
    let codigopostal=cadenaDividida[4];
    let servidor=email.split("@");
 document.getElementById("codigopostal").innerHTML= "Codigo postal: "+`${codigopostal}`;
 document.getElementById("apellidos").innerHTML= "Apellidos: "+`${apellidos}`;
 document.getElementById("email").innerHTML="Email: " +`${email}`;
 document.getElementById("servidor").innerHTML="Servidor: "+ `${servidor[1]}`;
 document.getElementById("telefono").innerHTML= "Telefono: "+`${telefono}`;
 }