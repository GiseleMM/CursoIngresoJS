/*Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var resta;

	numero1= prompt("Ingrese numero");
	numero1= parseInt(numero1);
	numero2= prompt("ingrese numero");
	numero2= parseInt(numero2);

	if( numero1== numero2)
	{
		alert(numero1+""+numero2);
	}
	else
	{
		if(numero1<numero2)
		{
			suma=numero1+numero2;
			alert(suma);	
		}
		else
		{
			resta=numero1-numero2;
			alert(resta);
			if(resta>10)
			{
				alert("la resta es "+resta+" y supero el 10");
			}
		}
	}
}