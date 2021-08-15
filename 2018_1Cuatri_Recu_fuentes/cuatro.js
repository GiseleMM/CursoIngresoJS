/*Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/
function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var mensaje;
	mensaje="";
	numero1= prompt("ingrese n°");
	numero1= parseInt(numero1);
	numero2= prompt("ingrese n°");
	numero2= parseInt(numero2);

	if(numero2==numero1)
	{
		alert(numero1+""+numero2);
	}
	else
	{
		if(numero1>numero2)
		{
			division= numero1/numero2;
			alert("la division es "+division);
		}
		else
		{
			suma=numero1+numero2;
			if(suma<50)
			{
				mensaje=" y es menor a 50"
			}
			alert("la suma es "+suma+mensaje);
			/*
			suma=numero1+numero2;
			if(suma<50)
			{	
				alert("la suma es "+suma+" y es menor a 50");
			}
			else
			{
				alert("la suma es "+suma);
			}
			*/
		}
	}

}