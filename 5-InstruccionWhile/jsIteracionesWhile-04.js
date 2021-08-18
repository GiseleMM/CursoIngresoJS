/*Gisele Medina Div H
Ejercicio 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado= parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado= prompt("Ingrese otro Numero");
	}
	txtIdNumero.value=numeroIngresado;
	alert("bien");
}//FIN DE LA FUNCIÓN 