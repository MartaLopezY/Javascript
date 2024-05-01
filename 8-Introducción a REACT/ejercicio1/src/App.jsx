import { useState } from 'react'   //para manejar el estado de tareas que almacena la lista
import { useEffect } from 'react'  //para cargar los datos iniciales de tareas del json

import './App.css'
import ListarTarea from './ListarTarea';
import FormTarea from './FormTarea';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => { //obtiene los datos del json
    try {
      const response = await fetch('tareas.json');
      const data = await response.json();
      setTareas(data);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const actualizarTarea = (tareaActualizada) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.nombre === tareaActualizada.nombre ? tareaActualizada : tarea
    );
    setTareas(nuevasTareas);
  };

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div className="App">
      <FormTarea agregarTarea={agregarTarea} />
      <ListarTarea tareas={tareas} actualizarTarea={actualizarTarea} />
    </div>
  );
}

export default App;