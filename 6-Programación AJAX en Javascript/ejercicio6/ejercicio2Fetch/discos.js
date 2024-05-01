/*Necesitamos almacenar en un programa todos los discos de música que tenemos en casa. 
Crea una clase “Disco” que almacene la siguiente información:
Nombre del disco.
Grupo de música o cantante.
Año de publicación.
Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
Localización: almacenará un número de estantería.
Prestado: almacenará un valor booleano. Por defecto será false.
Carátula: nombre del archivo de imagen de la carátula (p.ej: imagen.png)
Además tendrá los siguientes métodos:
Un constructor (la localización será 0 por defecto y prestado estará a false, carátula por defecto imagen.png).
Un método que permitirá cambiar el número de estantería en la localización.
Un método que permitirá cambiar la propiedad Prestado.
Un método que muestre toda la información de un disco.
Guarda todo el código en un archivo llamado disco.js y reutiliza en tu página el archivo de arrays que hicimos en la práctica 1.

 */
class Disco{
constructor(nombre,componentes,publicacion,tipoMusica,localizacion=0,prestado=false,caratula="imagen.png"){
this.nombre=nombre;
this.componentes=componentes;
this.publicacion=publicacion;
this.tipoMusica=tipoMusica;
this.localizacion=localizacion;
this.prestado=prestado;
this.caratula=caratula;
}
cambiarLocalizacion(nuevaLocalizacion){
this.localizacion=nuevaLocalizacion;
}
cambiarPrestado(prestado){
this.prestado=prestado;
}
MostrarInfo(){

return Object.values(this);  //devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto
}
}


export{Disco}
