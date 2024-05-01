/*
Los datos de DNI-Tarjeta de residencia-Pasaporte, fecha de nacimiento y clave están almacenados en un array de objetos de tipo Cliente.
 El checkBox permite almacenar los datos de un cliente por medio de WebStorage, para que la próxima vez que acceda a la página le aparezca el DNI y la fecha de nacimiento ya colocados.
	Cliente ha de ser una clase que almacene la información del cliente necesaria para que al pulsar en entrar acceda a la siguiente ventana:
 */
class Cliente{
constructor(dni,pasaporte,numero,fechaNacimiento){
this.dni=dni;
this.pasaporte = pasaporte;
this.numero = numero;
this.fechaNacimiento = fechaNacimiento;
this.clave = this.generarClaveSeguridad();

}
generarClaveSeguridad() {
	let clave = '';
	for (let i = 0; i < 6; i++) {
	  clave += Math.floor(Math.random() * 10);
	}
	return clave;
  }
}

export{Cliente}
