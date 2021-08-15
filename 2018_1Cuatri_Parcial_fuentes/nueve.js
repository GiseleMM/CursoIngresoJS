/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario
 quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
	var peso;
	var seguir;
	var marca;
	var temperatura;
	var acumuladorPeso;
	var productos;
	var banderaPesoMaxMin;
	var minimoPeso;
	var maximoPeso;
	var promedioPeso;
	var marcaMaximoPeso;
	var parTemperatura;
	var bajoCero;
	bajoCero=0;
	banderaPesoMaxMin="si";
	productos=0;
	parTemperatura=0;
	acumuladorPeso=0;
	seguir=true;


	while(seguir==true)
	{
		marca= prompt("ingrese marca del producto");
		peso= prompt("ingrese peso entre 1 y 100");
		peso= parseFloat(peso);
		while(isNaN(peso)|| peso<1 || peso>100)
		{
			peso= prompt("ingrese peso entre 1 y 100");
			peso= parseFloat(peso);
		}
		temperatura= prompt("ingrese temp entre -30 y 30 grados");
		temperatura= parseInt(temperatura);
		while(isNaN(temperatura)|| temperatura<-30 || temperatura>30)
		{
			temperatura= prompt("ingrese temp entre -30 y 30 grados");
			temperatura= parseInt(temperatura);
		}

//TEMPERATURA PARES
		if(temperatura%2==0)
		{
			parTemperatura++;
		}

//TEMPERATURA NEGATIVA CANTIDAD		
		if(temperatura<0)
		{
			bajoCero++;
		}
		

//CONTADOR PRODUCTO
		productos++;

//ACUMULADOR DE PESO
		acumuladorPeso+=peso;

//MAX Y MIN PESO		
		if(peso<minimoPeso || banderaPesoMaxMin=="si")
		{
			minimoPeso=peso;
		}
		if(peso>maximoPeso || banderaPesoMaxMin=="si")
		{
			maximoPeso=peso;
			marcaMaximoPeso=marca;
			banderaPesoMaxMin="no";
		}

		seguir=confirm("desea seguir?");
	}//FIN DEL WHILE

//PROMEDIO DE PESO
		promedioPeso=acumuladorPeso/productos;

document.write("el peso max "+maximoPeso + " y e  minimo  "+minimoPeso+"<br>");
document.write("el promedio de peso es "+promedioPeso+"<br>");
document.write("la cantidad de productos a bajo cero es "+bajoCero+"<br>");
document.write("la marca del producto mas pesado "+marcaMaximoPeso+"<br>");
document.write("la cantidad de temp pares es"+parTemperatura+"<br>");

}
