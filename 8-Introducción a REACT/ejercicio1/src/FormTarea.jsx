import  { useState } from 'react';

function FormTarea({ agregarTarea }) {
    const [tareaInput, setTareaInput] = useState('');  //useState crea una variable de estado tareaInput que almacena el input del formulario
  
    const handleInputChange = (event) => {  //actualiza el valor del input
      setTareaInput(event.target.value);
    };
  
    const handleSubmit = (event) => {  //cuando se envia el formulario añade una nueva tarea
      event.preventDefault();
      if (tareaInput.trim()) {
        agregarTarea({ nombre: tareaInput, realizada: false });
        setTareaInput('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={tareaInput}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    );
  }

  export default FormTarea;