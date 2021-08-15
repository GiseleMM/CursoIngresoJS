/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/

function mostrar()
{
	var letra;
	var numero;
	var seguir;
	var banderaMaximoMinimo;
	var contadorPositivos;
	var acumuladorNegativos;
	var contadorPares;
	var contadorImpar;
	var contadorCeros;
	var acumuladorPositivos;
	var letraMaximo;
	var letraMinimo;
	var minimo;
	var maximo;
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	contadorCeros=0;
	contadorPositivos=0;
	contadorImpar=0;
	contadorPares=0;
	banderaMaximoMinimo="si";
	seguir="si";
	while(seguir=="si")
	{
		letra= prompt("ingrese letra");
		while(isNaN(letra)==false)
		{
			letra= prompt("ingrese letra");	
		}
		numero= prompt("ingrese numero entre -100 y 100");
		numero= parseInt(numero);
		while(isNaN(numero)|| numero<-100 || numero>100)
		{
			numero= prompt("ingrese numero entre -100 y 100");
			numero= parseInt(numero);			
		}
		if(numero%2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpar++;
		}
		if(numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos+=numero;
		}
		else
		{
			if(numero<0)
			{
				acumuladorNegativos+=numero;
			}
			else
			{
				contadorCeros++;
			}
		}
		if(numero>maximo || banderaMaximoMinimo=="si")
		{
			maximo=numero;
			letraMaximo=letra;
		}
		if(numero<minimo || banderaMaximoMinimo=="si")
		{
			minimo=numero;
			letraMinimo=letra;
			banderaMaximoMinimo="no";

		}



		seguir= prompt("desea continuar?si/no");


	}//FIN DEL WHILE
if(contadorPositivos>0)
{
	promedioPositivos= acumuladorPositivos/contadorPositivos;
	document.write("El promedio de los positivos es "+promedioPositivos+"<br>");
}
else
{
	document.write("no se pede calcular el promedio positivo"+"<br>");
}

document.write("la suma de negativos es "+acumuladorNegativos+"<br>");
document.write("los numeros pares son"+contadorPares+"<br>");
document.write("los numeros impares son "+contadorImpar+"<br>");
document.write("la cantidad de ceros es "+contadorCeros+"<br>");
document.write("El numero maximo es "+maximo+" y su letra es "+letraMaximo+"<br>");
document.write("el numero minimo es "+minimo+" y su letra es "+letraMinimo+"<br>");
}
