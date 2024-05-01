/*Creación de Párrafos con color de fondo
Crea una página web que tenga un TextArea, una lista desplegable con colores y un botón "Crear párrafo". 
Cuando el usuario haga clic sobre el botón se creará un nuevo párrafo que contendrá el texto del TextArea 
y el color del fondo será el seleccionado en la lista desplegable. 
En caso de que el TextArea esté vacío, mostrará un mensaje de error y no creará ningún párrafo.
 */


 document.getElementById("crearParrafo").addEventListener("click", () => {
   let texto = document.getElementById("myTextarea").value;
   let color = document.getElementById("colorSelector").value;

   if (texto === "") {
     alert(
       "El campo de texto está vacío. Por favor, escribe algo antes de crear un párrafo."
     );
     return;
   }

   let nuevoParrafo = document.createElement("p");
   nuevoParrafo.textContent = texto;
   nuevoParrafo.style.backgroundColor = color;
   nuevoParrafo.className = "parrafo";

   document.getElementById("parrafoContainer").appendChild(nuevoParrafo);
 });