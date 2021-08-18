/*Gisele Medina div H
ejercicio 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese un número");
		numeroIngresado= parseInt(numeroIngresado);

		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo= numeroIngresado;
			numeroMinimo= numeroIngresado;
			banderaDelPrimero="no es el primero";
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo= numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMinimo)
				{
					numeroMinimo= numeroIngresado;
				}

			}
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;//Error en id
}//FIN DE LA FUNCIÓN