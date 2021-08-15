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
	var valor;
	var seguir;
	var banderaMaximoMinimo;
	var minimoValor;
	var letraMaximoValor;
	var letraMinimoValor;
	var maximoValor;
	var ceros;
	var positivos;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var par;
	var impar;
	var promedioPositivos;
	par=0;
	impar=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	positivos=0;
	ceros=0;
	banderaMaximoMinimo="si";
	seguir="si";
	while(seguir=="si")
	{
		letra= prompt("ingrese letra");
		while(isNaN(letra)==false)
		{
			letra= prompt("ingrese letra");
		}
		valor= prompt("ingrese valor entre -100 y 100");
		valor= parseInt(valor);
		while(isNaN(valor)|| valor<-100 || valor>100)
		{
			valor= prompt("ingrese valor entre -100 y 100");
			valor= parseInt(valor);		
		}
		if(valor%2==0)
		{
			par++;
		}
		else
		{
			impar++;
		}
		if(valor>0)
		{
			positivos++;
			acumuladorPositivos+=valor;
		}
		else
		{
			if(valor==0)
			{
				ceros++;
			}
			else
			{
				acumuladorNegativos+=valor;
			}
		}
		if(valor>maximoValor || banderaMaximoMinimo=="si")
		{
			maximoValor=valor;
			letraMaximoValor= letra;
		}
		if(valor<minimoValor || banderaMaximoMinimo=="si")
		{
			minimoValor=valor;
			letraMinimoValor=letra;
			banderaMaximoMinimo="no";
		}



		seguir= prompt("desea seguir?si/no");
	}//FIN DEL WHILE
	if(positivos>0)
	{
		promedioPositivos= acumuladorPositivos/positivos;
		document.write("promedio de positivos es"+promedioPositivos+"<br>");
	}
	else
	{
		document.write("nose puede clacular elpromedio de positivos"+"<br>");
	}
	document.write("la suma de los negativos da "+acumuladorNegativos+"<br>");
	document.write("la cantida de ceros es "+ceros+"<br>");
	document.write("el maximo valor es"+maximoValor+" y su letra es "+letraMaximoValor+" y ell minimo Valor es" +minimoValor+" y su letra es"+letraMinimoValor+"<br>");	
}
