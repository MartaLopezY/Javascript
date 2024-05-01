/*Lista de Tareas Interactiva
Crea un aplicación en javascript que permita realizar una lista de tareas, inicialmente la lista se cargará desde un array de objetos tarea con dos campos: texto(string) y realizada(boolean) que se irá modificando a la vez que el listado en pantalla.  
El usuario podrá introducir una nueva tarea desde un input al hacer click en un botón, se ha de utilizar los métodos de creación de elementos vistos en la unidad.

Amplía la funcionalidad de la lista de tareas permitiendo marcar una tarea como completada. Cada tarea en la lista debe tener un checkbox que, al hacer clic, cambie su estilo para indicar visualmente que ha sido completada.
Puedes utilizar el siguiente estilo para tachar la tarea:
.incorrecto {
    text-decoration:line-through;
    color: red;
}
	Cambia el ejercicio 6.1 para que las tareas iniciales se carguen desde un JSON.
 */
class Tarea{
constructor(nombre){
this.nombre=nombre;
this.realizada=false;
}

}
 const tareaList = document.getElementById("tareaList");
 const addButton = document.getElementById("agregar");
 let datos=[];
 let listaTareas = [];
 cargarDatos();
 function cargarDatos() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      datos = JSON.parse(this.responseText);
       for (let i = 0; i < datos.length; i++) {
         let nombre = datos[i].nombre;
         let realizada = datos[i].realizada;
         listaTareas.push(new Tarea(nombre, realizada));
         console.log(listaTareas);
       }
for (let i = 0; i < listaTareas.length; i++) {
  tareaList.appendChild(crearTarea(listaTareas[i]));
}
       }
    };
  xhr.open("GET", "tareas.json", true);
  xhr.send();
}






 addButton.addEventListener('click', () => {
  const tareaInput = document.getElementById('tareaInput');
  const tareaText = tareaInput.value;

  if (tareaText !== '') {
   listaTareas.push(new Tarea(tareaText));

   tareaList.appendChild(crearTarea(listaTareas[listaTareas.length - 1]));
   tareaInput.value = "";
  }
 });
 function crearTarea(tarea) {
   const li = document.createElement("li");
   li.textContent = tarea.nombre;
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.checked = tarea.realizada;
   checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("incorrecto");
    } else {
      li.classList.remove("incorrecto");
    }
  });

  li.appendChild(checkbox);
  return li;

 }