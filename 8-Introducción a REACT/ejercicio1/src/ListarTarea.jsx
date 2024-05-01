
import TareaItem from './TareaItem';
function TareaList({ tareas, actualizarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
           <TareaItem key={index} tarea={tarea} actualizarTarea={actualizarTarea} />
     
      ))}
    </ul>
  );
}


export default TareaList;