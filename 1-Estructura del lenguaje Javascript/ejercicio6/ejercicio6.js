/*Crea un programa que genere un listado de horas que vayan desde las 9 hasta las
21 de 5 minutos en 5 minutos.
En lugar de mostrar un alert, utiliza la instrucción document.write(“Mensaje”) que
muestra los datos en el propio HTML.
Comenta el código con los comentarios que estimes necesarios.
*/
function horas(){
for(let hora=9;hora<=21;hora++){
    if(hora==21){
        document.write(hora+":00"+"<br>"); 
    }else{
    for(let minuto=0;minuto<60;minuto=minuto+5){
        if(minuto==0 || minuto==5) {
            document.write(hora+":0"+minuto+"<br>"); 
        }else
    document.write(hora+":"+minuto+"<br>"); 
    }
}
}
}