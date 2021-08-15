/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos
 de un vehiculo, un color (rojo verde o amarillo) y un valor 
 entre 0 y 10000 hasta que el usuario quiera e informar al terminar
  el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
Curso de ingreso UTN FRA*/

function mostrar()
{
	var color;
	var valor;
	var seguir;
	var contadorVehiculos;
	var acumuladorValorVehiculos;
	var promediosVehiculos;
	var vehiculoMasCaro;
	var colorVehiculoMasCaro;
	var banderaVehiculoMasCaro;
	var contadorVehiculosRojosMayoresA5000;
	var contadorVehiculosRojos;
	var contadorVehiculosMenoresA5000;
	contadorVehiculosMenoresA5000=0;
	contadorVehiculosRojosMayoresA5000=0;
	contadorVehiculosRojos=0;
	banderaVehiculoMasCaro="si";
	acumuladorValorVehiculos=0;
	seguir="si";
	contadorVehiculos=0;
	while(seguir=="si")
	{
		color= prompt("ingrese color verde, rojo o amarillo");
		while(color!="rojo" && color!="verde" && color!="amarillo")
		{
			color= prompt("ingrese color verde, rojo o amarillo");	
		}
		valor= prompt("ingrese un valor entre 0 y 10000");
		valor= parseInt(valor);
		while(isNaN(valor)|| valor<0 || valor>10000)
		{
			valor= prompt("ingrese un valor entre 0 y 10000");
			valor= parseInt(valor);			
		}
		contadorVehiculos++;
		acumuladorValorVehiculos+=valor;
		switch(color)
		{
			case "rojo":
			contadorVehiculosRojos++;
			if(valor>5000)
			{
				contadorVehiculosRojosMayoresA5000++;
			}
			else
			{
				contadorVehiculosMenoresA5000++;//VOY A VER SI SIRVE EL MISMO CONTADOR PARA LOS 3
			}
			break;
			case "verde":
			case "amarillo":
			if(valor<5000)
			{
				contadorVehiculosMenoresA5000++;
			}
			break;

		}

		if(valor>vehiculoMasCaro || banderaVehiculoMasCaro=="si")
		{
			vehiculoMasCaro=valor;
			colorVehiculoMasCaro=color;
			banderaVehiculoMasCaro="no";
		}





		seguir= prompt("desea seguir?si/no");
	}//FIN DEL WHILE
	promediosVehiculos= acumuladorValorVehiculos/contadorVehiculos;
	alert("el promedio de los vehiculos ingresados es "+promediosVehiculos);
	alert("el vehiculo mas caro es "+vehiculoMasCaro+ " y su color es "+colorVehiculoMasCaro);
	alert("la cantidad de vehiculos rojo es "+contadorVehiculosRojos);
	alert("la cantidad de rojos superior a 5000 es "+contadorVehiculosRojosMayoresA5000);
	alert("la cantidad de vehiculos con valor inferior a 5000 es "+contadorVehiculosMenoresA5000);
}