/*Crea una clase Cliente y define un array de clientes con los siguientes datos:

Nombre;Localidad;Cuota
Laura;Santander;50
Álvaro;Castro;50
Igor;Castro;60
Ivan;Santander;40
Mónica;Zamora;30
Javi;Bilbao;30
David;Bilbao;50

A partir del mismo, el usuario podrá elegir del menú:
Todos los clientes: se mostrará una tabla con los valores que están en la variable anterior.
Usuarios de una provincia: y a partir de la provincia introducida por el usuario se mostrarán en una tabla los nombres y cuotas de las personas que viven en esa provincia.
Usuarios que tengan una cuota mayor que un valor: y se mostrarán en una tabla los nombres de usuario, provincias y cuotas de aquellos que tienen una cuota superior al valor introducido por el usuario (valora cuál es el mejor modo de hacerlo).
Realiza el ejercicio 4.3 leyendo la lista de un JSON. 
 */
class Cliente{
    constructor(nombre,localidad,cuota){
        this.nombre=nombre;
        this.localidad=localidad;
        this.cuota=cuota;
    }

}

document.getElementById("cargar").addEventListener("click", cargarDatos);
document.getElementById("respuesta");
document.getElementById("boton").addEventListener("click", ejecuta, true);
let clientes = [];
function cargarDatos(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let objeto = JSON.parse(this.responseText);
            clientes = objeto;
        }
    };
    xhr.open("GET", "clientes.json", true);
    xhr.send();
}




function ejecuta(){
    let menuOpcion=document.getElementById("opcion").value;
    let salida=document.getElementById("respuesta");
    document.getElementById("miTabla").clean;
    switch(menuOpcion){
    case "1": 
         mostrarClientes(clientes);
         salida.innerHTML=`Todos los clientes: `; break;
    case "2": 
    let provincia=prompt("Introduce una provincia");
         mostrarPorProvincia(provincia);
         salida.innerHTML=`Usuarios de una provincia:`; break;
    case "3": 
    let cuota=prompt("Introduce una cuota");
         mostrarPorCuota(cuota);
         salida.innerHTML=`Usuarios que tengan una cuota mayor que un valor: `; break;
}

}
function mostrarClientes(miArray){
    let tabla=document.getElementById("miTabla");
    let encabezado=document.createElement("tr");   //crea la fila
    let thNombre=document.createElement("th");    //crea la columna de encabezado
    thNombre.textContent="Nombre";    //Introduce el contenido en la columna
    encabezado.appendChild(thNombre);  //Agrega la columna a la fila 
    let thLocalidad=document.createElement("th");
    thLocalidad.textContent="Localidad";
    encabezado.appendChild(thLocalidad);
    let thCuota=document.createElement("th");
    thCuota.textContent="Cuota";
    encabezado.appendChild(thCuota);
    tabla.appendChild(encabezado);    //Agrega la fila a la tabla
  
for(let i=0;i<miArray.length;i++){
    let fila=document.createElement("tr"); 
    let tdNombre=document.createElement("td");
    tdNombre.textContent=miArray[i].nombre;
    fila.appendChild(tdNombre);
    let tdLocalidad=document.createElement("td");
    tdLocalidad.textContent=miArray[i].localidad;
    fila.appendChild(tdLocalidad);
    let tdCuota=document.createElement("td");
    tdCuota.textContent=miArray[i].cuota;
    fila.appendChild(tdCuota);
    tabla.appendChild(fila);
     }
  
}

function mostrarPorProvincia(provincia){
    let clientesProvincia=[];
    for(let i=0;i<clientes.length;i++){
        if(clientes[i].localidad==provincia)
             clientesProvincia.push(clientes[i]);
    }
    mostrarClientes(clientesProvincia);
}
function mostrarPorCuota(cuota){
    let clientesCuota=[];
    for(let i=0;i<clientes.length;i++){
        if(clientes[i].cuota > cuota)
             clientesCuota.push(clientes[i]);
    }
      mostrarClientes(clientesCuota);

}
