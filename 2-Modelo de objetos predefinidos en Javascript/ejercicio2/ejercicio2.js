/*Crea un programa que pida el día y el mes de tu cumpleaños y muestre los años en que tu cumpleaños va a caer en domingo desde el año actual hasta el año 2100.
 */function ejecuta(){
    let dia= document.getElementById("dia").value;
    let mes= document.getElementById("mes").value;
    let year=new Date().getFullYear();
    let respuesta= "Los años en que cae en domingo son:";
    for(i=year;i<=2100;i++){
      let fecha=new Date(i,mes-1,dia);
      if(fecha.getDay()==0){
      respuesta=respuesta+" "+i;
         document.getElementById("resultado").innerHTML= `${respuesta}`;
      }
    }
  
 }