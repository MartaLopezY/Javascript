/*Lista de Tareas Interactiva
Crea un aplicación en javascript que permita realizar una lista de tareas, inicialmente la lista se cargará desde un array de objetos tarea con dos campos: texto(string) y realizada(boolean) que se irá modificando a la vez que el listado en pantalla.  
El usuario podrá introducir una nueva tarea desde un input al hacer click en un botón, se ha de utilizar los métodos de creación de elementos vistos en la unidad.

Amplía la funcionalidad de la lista de tareas permitiendo marcar una tarea como completada. Cada tarea en la lista debe tener un checkbox que, al hacer clic, cambie su estilo para indicar visualmente que ha sido completada.
Puedes utilizar el siguiente estilo para tachar la tarea:
.incorrecto {
    text-decoration:line-through;
    color: red;
}

 */
class Tarea{
constructor(nombre){
this.nombre=nombre;
this.realizada=false;
}

}
 const tareaList = document.getElementById("tareaList");
 const addButton = document.getElementById("agregar");
let listaTareas = [
  new Tarea("Hacer la colada"),
  new Tarea("Preparar la cena"),
  new Tarea("Tirar la basura")
];
for(let i=0;i<listaTareas.length;i++){
   tareaList.appendChild(crearTarea(listaTareas[i]));

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