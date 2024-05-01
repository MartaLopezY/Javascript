/*Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2. Tu aplicación también debe imprimir el resultado de las siguientes operaciones empleando desplazamiento de bits:

125 / 8 =
40 x 4 =
25 / 2 =
10 x 16 = */



function multiplicar(x,y){
     let desplaza=0;
     do{
       y=(y/2);
       desplaza++;
     }while(y>=2)
     let resultado=x<<desplaza;
     document.write("<span> El resultado de la multiplicación es:" + resultado + "</span><br>");
    
     }
 function dividir(x,y){
  let desplaza=0;
     do{
       y=(y/2);
       desplaza++;
     }while(y>=2)
         let resultado=x>>desplaza;
         document.write("<span> El resultado de la división es: " + resultado + "</span><br>");
     
     }