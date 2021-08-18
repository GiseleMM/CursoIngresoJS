/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;//SUMA
	respuesta="si";//SEGUIR

	while(respuesta=="si")
	{
		numeroIngresado= prompt("ingrese numero:");
		numeroIngresado= parseInt(numeroIngresado);
		acumulador+=numeroIngresado;//en vez de suma acumulador
		contador++;
		respuesta= prompt("¿quiere ingresar otro numero? si/no ");//en vez de seguir- respuesta
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN