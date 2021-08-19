/*Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	var numero;
	var seguir;
	var contadorDivisores;
	var mensaje;
	//var seguir=true;
	var i;
	i=1;
	numero=prompt("ingrese N°");
	numero=parseInt(numero);
	mensaje="es primo";
	for(contadorDivisores=0;numero>i;i++)
	{
		
		if(numero%i==0)
		{
			contadorDivisores++;
			if(contadorDivisores==3)
			{
				mensaje="no es primo";
				break;
			}
		}
		
	}
	alert(mensaje);

	/*for(;;)
	{	contadorDivisores=0;
		numero=prompt("ingrese N°");
		numero=parseInt(numero);
		mensaje="es primo";
		for(i=1;i<=numero; i++)
		{
			if(numero%i==0)
			{
				contadorDivisores++;
				if(contadorDivisores==3)
				{
					mensaje="no es primo";
					break;
				}
			}
		//alert("es primo");	aca aparece en cada iteracion
		}
		//alert("es primo");ACA APARECE SIEMPRE
		alert(mensaje);
		seguir=confirm("desea seguir")
		if(seguir==false)
		{
			break;
		}

	}

	alert("ok");*/

}//FIN DE LA FUNCIÓN