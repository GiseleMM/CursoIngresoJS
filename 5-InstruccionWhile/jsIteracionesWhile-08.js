/*gisele Medina DIV H
ejercicio 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;//ACumulaDOR SUMA se INICIALIZA EN 0
	multiplicacionNegativos=1;//ACumulador en producto se inicia en 1
	respuesta="si";

	while(respuesta=="si")//NO OLVIDAR "==" NO "="
	{
		numeroIngresado= prompt("Ingrese numero/s:");
		numeroIngresado= parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;
			multiplicacionNegativos="";
		}
		else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos*=numeroIngresado;
				sumaPositivos="";
			}
			
		}

		respuesta= prompt("Ingresa otro numero? si/no");
		
	}



	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN