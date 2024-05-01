/*Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:

Tabla de multiplicar del 7.
Tabla de sumar del 8.
Tabla de dividir del 9.
Utilizar los tres tipos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente). */



function multiplicar(x){
   for(i=1;i<=10;i++){
    let resultado=x*i;
    document.write("<span>"+ x +" x "+ i + " = " + resultado + "</span><br>" );
   }
    }
function sumar(x){
    let i=0;
    do{
        i++;
        let resultado=x+i;
        document.write("<span>"+ x +" + "+ i + " = " + resultado + "</span><br>" );
      }while(i<10);
    }
    function dividir(x){
        let i=0;
        while(i<10){
            i++;
            let resultado=x/i;
            document.write("<span>"+ x +" : "+ i + " = " + resultado + "</span><br>" );
          }
        
    }