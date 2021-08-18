/*Gisele Medina DIV H
Ejercicio 10 Bis while
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10- maximo de todos los n ingresados
11- minimo de todos los positivos.*/

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia; 
	var numeroMaximoIngresado;
	var numeroMinimoIngresado;
	var banderaDelPrimero;
	var minimoPositivo;


	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;

	banderaDelPrimero="si";	
	respuesta="si";
	banderaDelSegundo="si"

	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese numero");
		numeroIngresado= parseInt(numeroIngresado);

		if(numeroIngresado>numeroMaximoIngresado || banderaDelPrimero=="si" )
		{
			numeroMaximoIngresado=numeroIngresado;
			banderaDelPrimero="no"
		}
		/*if(numeroIngresado<numeroMinimoIngresado || banderaDelPrimero=="si")
		{
				numeroMinimoIngresado= numeroIngresado;
				banderaDelPrimero="no";
		}*/
		if(numeroIngresado>0)
		{
			sumaPositivos+= numeroIngresado;
			cantidadPositivos++;
			if(numeroIngresado<=minimoPositivo || banderaDelSegundo=="si")
			{
				minimoPositivo=numeroIngresado;
				banderaDelSegundo="no";
			}
			/*
				if(numeroIngresado<=numeroMinimoIngresado)//funciona pero si ingreso 0 y 4 no etra el 4 xq el minumero ingresado es 0,agrego switch
				{
				minimoPositivo=numeroIngresado;
				}
*/
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos+=numeroIngresado;
				cantidadNegativos++;
			}
			else//si no es mayor de 0, ni menor de 0, es 0
			{
				cantidadCeros++;
			}
		}
		if(numeroIngresado%2==0)
		{
			cantidadNumerosPares++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while
	diferencia= sumaPositivos - sumaNegativos;
	switch(cantidadNegativos)
	{
		case 0:
		document.write("No se divide por 0 No se puede calcular el promedio de negativos"+"<br>");
		break;
		default:
		promedioNegativos= sumaNegativos/cantidadNegativos;
		document.write("el promedio de  negativos es :"+promedioNegativos+"<br>");
	}
	
	switch(cantidadPositivos)
	{
		case 0://si la cantidad de positivos es 0 (NO ingrese positivos)
		document.write("0/0 no se puede calcular el promedio de positivos"+"<br>");
		minimoPositivo=	document.write("no existe minimo positivos"+"<br>");//No olvidar BR 
		break;
		default:
		promedioPositivos= sumaPositivos/cantidadPositivos;
		document.write("el promedio de positivos es :"+promedioPositivos+"<br>");	
		break;
	}

	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cantidad de negativos es :"+cantidadNegativos+"<br>");
	document.write("la cantidad de positivos es :"+cantidadPositivos+"<br>");
	document.write("la cantidad de ceros es:"+cantidadCeros+"<br>");
	document.write("el numero maximo ingressado:"+numeroMaximoIngresado+"<br>");
	document.write( "El minimo positivo"+minimoPositivo+"<br>");
	document.write( "la diferencia entre las sumas de positivos y negativos es "+diferencia+"<br>");

}//FIN DE LA FUNCIÓN






































/*Gisele Medina DIV H
Ejercicio 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioNegativos;
	var promedioPositivos;
	var Diferencia; 

	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese numero");
		numeroIngresado= parseInt(numeroIngresado);


		if(numeroIngresado>0)
		{
			sumaPositivos+= numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos+=numeroIngresado;
				cantidadNegativos++;
			}
			else//si no es mayor de 0 ni menor de 0 es 0
			{
				cantidadCeros++;
			}

		}
		if(numeroIngresado%2==0)
		{
			cantidadNumerosPares++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while
	
	switch(cantidadNegativos)
	{
		case 0:
		document.write("No se divide por 0 No se puede calcular el promedio de negativos"+"<br>");
		break;
		default:
		promedioNegativos= sumaNegativos/cantidadNegativos;
		document.write("el promedio de  negativos es :"+promedioNegativos+"<br>");
	}
	
	switch(cantidadPositivos)
	{
		case 0:
		document.write("no se divide por 0 no se puede calcular el promedio de positivos"+"<br>");
		break;
		default:
		promedioPositivos= sumaPositivos/cantidadPositivos;
		document.write("el promedio de positivos es :"+promedioPositivos+"<br>");	
		break;
	}

	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cantidad de negativos es :"+cantidadNegativos+"<br>");
	document.write("la cantidad de positivos es :"+cantidadPositivos+"<br>");
	document.write("la cantidad de ceros es:"+cantidadCeros+"<br>");

}//FIN DE LA FUNCIÓN

*/