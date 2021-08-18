/*Enunciado:
Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio.*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var suma;


	suma=0
	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado= prompt("Ingrese 5 numeros");
		numeroIngresado= parseInt(numeroIngresado);

		suma+=numeroIngresado;//acumulador suma+=n°ingresado es igual a Suma+ningresado


		contador++;//contador contdor++es igual a contador= contador+ 1 
	}
	
	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador;//5 puede ser una opcion pero es mejor sacar el promedio con los n imgresados
}//FIN DE LA FUNCIÓN