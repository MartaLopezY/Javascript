/*Diseña una aplicación web que lea y muestre información de pilotos de Fórmula 1 desde un archivo JSON como el del ejemplo.

Implementa las siguientes funcionalidades interactivas decidiendo tu el diseño que quieras utilizar:
Ordenar por Nombre o Equipo: Permite al usuario ordenar la lista de pilotos por nombre o equipo, ya sea de forma ascendente o descendente.
Filtrar por Nacionalidad: Agrega un filtro para que el usuario pueda ver solo los pilotos de una nacionalidad específica.
Destacar Piloto: Permite al usuario hacer clic en un piloto para destacarlo, cambiando su estilo visual.
Implementar paginación para la lista de pilotos, se mostrarán 3 pilotos por página e incluirá la opción ver todos.
 */

let pilotos = [];
let pilotosOriginal = [];
let paginaActual = 1;
let elementosPorPagina = 3;
function cargarDatos() {
fetch('pilotos.json')
    .then(response => response.json())
    .then(data => {
        pilotos = data.pilotos;
        pilotosOriginal = [...data.pilotos]; 
        insertarDatos();
    })
    .catch(error => console.error('Error:', error));
}
cargarDatos();

document.getElementById('ordenarPorNombre').addEventListener('click', ordenarPorNombre);
document.getElementById('ordenarPorEquipo').addEventListener('click', ordenarPorEquipo);
document.getElementById('filtroNacionalidad').addEventListener('input', () => filtrarPorNacionalidad(document.getElementById('filtroNacionalidad').value));
//Agrego un controlador de eventos. Con una función flecha llamo a la función filtrarPorNacionalidad con el valor actual del input
document.getElementById('verTodosFiltrados').addEventListener('click', verTodosFiltrados);
document.getElementById('verTodos').addEventListener('click', verTodos);
document.getElementById('paginacionTresEnTres').addEventListener('click', paginar);
function insertarDatos() {
    const cuerpoTabla = document.querySelector('#tablaPilotos tbody');
    cuerpoTabla.innerHTML = '';

    let pilotosMostrados = pilotos;

    if (elementosPorPagina !== Infinity) {
        const inicio = (paginaActual - 1) * elementosPorPagina;
        const fin = inicio + elementosPorPagina;
        pilotosMostrados = pilotos.slice(inicio, fin);
    }

    pilotosMostrados.forEach((piloto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${piloto.nombre}</td><td>${piloto.equipo}</td><td>${piloto.numero}</td><td>${piloto.nacionalidad}</td>`;
        fila.addEventListener('click', () => destacarPiloto(index));
        cuerpoTabla.appendChild(fila);
    });

    if (elementosPorPagina !== Infinity) {
        generarPaginacion();
    }
}

function destacarPiloto(indice) {
    const filas = document.querySelectorAll('#tablaPilotos tbody tr');
    filas.forEach((fila, i) => {
        if (i !== indice) {
            fila.classList.remove('destacado');
        } else {
            fila.classList.add('destacado');
        }
    });
}

function ordenarPorNombre() {
    pilotos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    //El método localeCompare compara los atributos de nombre del objeto
    insertarDatos();
}

function ordenarPorEquipo() {
    pilotos.sort((a, b) => a.equipo.localeCompare(b.equipo));
    insertarDatos();
}

function filtrarPorNacionalidad(nacionalidad) {
    if (nacionalidad === "") {
        pilotos = [...pilotosOriginal]; 
        // Restablece los datos originales. Asi compara siempre lo que hay en el input con el array original del archivo
    } else {
        pilotos = pilotosOriginal.filter(piloto => piloto.nacionalidad.toLowerCase() === nacionalidad.toLowerCase());
        //filter(condicion) crea un nuevo array con todos los elementos que cumplan con la condición
    }
    paginaActual = 1;
    elementosPorPagina = 3; // Restablecer la paginación
    insertarDatos();
}
function verTodosFiltrados(){
    pilotos = pilotosOriginal.slice(); 
    // Restablece los datos originales. El método slice hace una copia del array pilotosOriginal
    paginaActual = 1;
    elementosPorPagina = 3;
    insertarDatos();
    generarPaginacion();
}

function generarPaginacion() {
    const paginacion = document.querySelector('#paginacion');
    paginacion.innerHTML = '';

    const totalPaginas = Math.ceil(pilotos.length / elementosPorPagina);  //Math.ceil() redondea hacia arriba
    const botonAnterior = document.createElement('button');
    botonAnterior.innerText = 'Anterior';
    botonAnterior.addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            insertarDatos();
        }
    });
    paginacion.appendChild(botonAnterior);

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement('button');
        boton.innerText = i;
        boton.addEventListener('click', () => {
            paginaActual = i;
            insertarDatos();
        });
        paginacion.appendChild(boton);
    }

    const botonSiguiente = document.createElement('button');
    botonSiguiente.innerText = 'Siguiente';
    botonSiguiente.addEventListener('click', () => {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            insertarDatos();
        }
    });
    paginacion.appendChild(botonSiguiente);
}

function verTodos() {
    paginaActual = 1;
    elementosPorPagina = Infinity;  
    //El elemento Infinity representa que no hay limite en el número de elementosPorPagina. Así me muestra todos los datos que tenga en una sola página
    insertarDatos();
    generarPaginacion(); 
}
function paginar(){
    paginaActual = 1;
    elementosPorPagina = 3;
    insertarDatos();
    generarPaginacion();  
}
