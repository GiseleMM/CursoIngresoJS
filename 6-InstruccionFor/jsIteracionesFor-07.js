/*Enunciado:
al presionar el botón pedir un número.
 mostrar los numeros divisores desde el 1 al número ingresado, 
 y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	var seguir;
	var numero;
	var acumuladorDivisores;
	var cantidadDivisores;

	for(;;)
	{	
		acumuladorDivisores="";
		cantidadDivisores=0;
		numero=prompt("Ingrese n°");
		numero=parseInt(numero);
		for(i=1;i<=numero;i++)
		{
			if(numero%i==0)
			{
				cantidadDivisores++;
				acumuladorDivisores+=" "+i+" ";
			}
		}
		alert(acumuladorDivisores+" la cantidad de divisores es "+cantidadDivisores);
		seguir=confirm("desea seguir?");
		if(seguir==false)
		{
			break;
		}


	}

	alert("ok");


}//FIN DE LA FUNCIÓN