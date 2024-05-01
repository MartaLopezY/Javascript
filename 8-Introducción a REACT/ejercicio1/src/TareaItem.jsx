
function TareaItem({ tarea, actualizarTarea }) {
    const handleChange = () => { //se dispara cuado el checkbox cambia de estado
      actualizarTarea({ ...tarea, realizada: !tarea.realizada });
    };
  
    return (
      <li className={tarea.realizada ? 'incorrecto' : ''}>
        <input
          type="checkbox"
          checked={tarea.realizada}
          onChange={handleChange}
        />
        {tarea.nombre}
      </li>
    );
  }
 

  export default TareaItem;