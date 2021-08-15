/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
	var letra;
	var numero;
	var seguir;
	var par;
	var impar;
	var ceros;
	var promedioPositivos;
	var acumuladorPositivos;
	var positivos;
	var acumuladorNegativos;
	var banderaMaximoMinimo;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;
	positivos=0;
	ceros=0;
	par=0;
	impar=0;
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	positivos=0;
	banderaMaximoMinimo="si";
	seguir=true;//SI LO PONGO "true"NO FUNCIONA

	while(seguir==true)//(seguir=="si")USO CONFIRM Q DEVUELVE TRUE O FALSE
	{
		letra= prompt("ingrese una letra");
		while(isNaN(letra)==false)
		{
			letra= prompt("ingrese una letra");
		}
		numero= prompt("ingrese numero entre -100 y 100");
		numero= parseInt(numero);
		while(isNaN(numero)|| numero<-100 || numero>100)
		{
			numero= prompt("ingrese numero entre -100 y 100");
			numero= parseInt(numero);
		}

//CANTIDAD DE PARES E IMPARES
		if(numero%2!=0)
		{
			impar++;
		}
		else
		{
			par++;
		}			

//POSITIVOS Y NEGATIVOS
		if(numero<0)
		{
			acumuladorNegativos+=numero;
		}
		else
		{
			if(numero==0)
			{
				ceros++;
			}
			else
			{	
				positivos++;
				acumuladorPositivos+=numero;
			}
		}

//MAXIMO Y MINIMO
		if(numero<numeroMinimo || banderaMaximoMinimo=="si")
		{
			numeroMinimo=numero;
			letraMinimo=letra;
		}
		if(numero>numeroMaximo || banderaMaximoMinimo=="si")
		{
			numeroMaximo=numero;
			letraMaximo=letra;
			banderaMaximoMinimo="no";
		}		
		seguir=confirm("funciona?");//ESTO DEVUELVE TRUE TENGO Q CAMBIAR LA CONDICION DEL WHILE
	}//FIN DEL WHILE
	switch(positivos)
	{
		case 0:
		document.write("no se ingreso  positivos"+"<br>");
		break;
		default:
		promedioPositivos=acumuladorPositivos/positivos;
		document.write("el promedio de positivos es"+promedioPositivos+"<br>");
		break;
	}

	document.write("el maximo numero fue "+numeroMaximo+"letra "+letraMaximo+"<br>");
	document.write("el minimo numero fue "+ numeroMinimo+ " letra "+letraMinimo+"<br>");
	document.write("la cantidad de ceros es "+ceros+" pares "+par+" impar "+impar+"<br>");
	document.write("la suma de los negativos es "+acumuladorNegativos+"<br>");


}
